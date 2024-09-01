package com.mergentech.internship_project.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mergentech.internship_project.dtos.requests.AuthRequest;
import com.mergentech.internship_project.dtos.responses.AuthResponse;
import com.mergentech.internship_project.model.Admin;
import com.mergentech.internship_project.repository.AdminDao;
import com.mergentech.internship_project.token.Token;
import com.mergentech.internship_project.token.TokenDao;
import com.mergentech.internship_project.token.TokenType;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class AuthManager {
    private final AdminDao adminDao;
    private final JwtManager jwtManager;
    private final TokenDao tokenDao;
    private final AuthenticationManager authenticationManager;

    public AuthManager(AdminDao adminDao, JwtManager jwtManager, TokenDao tokenDao, AuthenticationManager authenticationManager) {
        this.adminDao = adminDao;
        this.jwtManager = jwtManager;
        this.tokenDao = tokenDao;
        this.authenticationManager = authenticationManager;
    }

    public AuthResponse authenticate(AuthRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        var admin = adminDao.findByUsername(request.getUsername()).orElseThrow();
        var jwtToken = jwtManager.generateToken(admin.getUsername());
        var refreshToken = jwtManager.generateRefreshToken(admin.getUsername());
        revokeAllUserTokens(admin);
        saveToken(admin, jwtToken);
        return AuthResponse.builder()
                .accessToken(jwtToken)
                .refreshToken(refreshToken)
                .build();
    }

    private void saveToken(Admin admin, String jwtToken) {
        var token = Token.builder()
                .admin(admin)
                .token(jwtToken)
                .tokenType(TokenType.BEARER)
                .expired(false)
                .revoked(false)
                .build();
        tokenDao.save(token);
    }

    private void revokeAllUserTokens(Admin admin) {
        var validUserTokens = tokenDao.findAllValidTokenByUser(admin.getId());
        if (!validUserTokens.isEmpty()) {
            validUserTokens.forEach(token -> {
                token.setExpired(true);
                token.setRevoked(true);
            });
        }
        tokenDao.saveAll(validUserTokens);
    }

    public void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException {
        final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        final String refreshToken;
        final String username;
        if (authHeader != null || authHeader.startsWith("Bearer ")) {
            return;
        }
        refreshToken = authHeader.substring(7);
        username = jwtManager.extractUser(refreshToken);
        if (username != null) {
            var admin = this.adminDao.findByUsername(username).orElseThrow();
            if (jwtManager.validateToken(refreshToken, admin)) {
                var accessToken = jwtManager.generateToken(admin.getUsername());
                revokeAllUserTokens(admin);
                saveToken(admin, accessToken);
                var authResponse = AuthResponse.builder()
                        .accessToken(accessToken)
                        .refreshToken(refreshToken)
                        .build();
                new ObjectMapper().writeValue(response.getOutputStream(), authResponse);
            }
        }
    }
}
