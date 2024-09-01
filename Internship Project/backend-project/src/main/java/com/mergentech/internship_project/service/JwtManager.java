package com.mergentech.internship_project.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class JwtManager {
    @Value("${jwt.key}")
    private String SECRET;
    @Value("${jwt.expiration}")
    private long jwtExpiration;
    @Value("${jwt.refreshtoken.expiration}")
    private long refreshExpiration;

    public String generateToken(String userName) {
        Map<String, Object> claims = new HashMap<>();
        return createToken(claims, userName, jwtExpiration);
    }

    private String createToken(Map<String, Object> claims, String userName, long expiration) {
        return Jwts.builder().claims(claims).subject(userName).issuedAt(new Date(System.currentTimeMillis())).expiration(new Date(System.currentTimeMillis() + expiration)).signWith(getSignKey()).compact();
    }

    public String generateRefreshToken(String userName) {
        return createToken(new HashMap<>(), userName, refreshExpiration);
    }

    private SecretKey getSignKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    public boolean validateToken(String token, UserDetails userDetails) {
        String username = extractUser(token);
        Date expirationDate = extractExpiration(token);
        return userDetails.getUsername().equals(username) && !expirationDate.before(new Date());
    }

    public String extractUser(String token) {
        Claims claims = Jwts.parser().verifyWith(getSignKey()).build().parseSignedClaims(token).getPayload();
        return claims.getSubject();
    }

    private Date extractExpiration(String token) {
        Claims claims = Jwts.parser().verifyWith(getSignKey()).build().parseSignedClaims(token).getPayload();
        return claims.getExpiration();
    }
}
