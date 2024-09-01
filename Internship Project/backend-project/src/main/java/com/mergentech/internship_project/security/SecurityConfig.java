package com.mergentech.internship_project.security;

import com.mergentech.internship_project.config.Config;
import com.mergentech.internship_project.model.Role;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.logout.LogoutHandler;

@Configuration
public class SecurityConfig {
    private final JwtAuthFilter jwtAuthFilter;
    private final Config config;
    private final LogoutHandler logoutHandler;

    public SecurityConfig(JwtAuthFilter jwtAuthFilter, Config config, LogoutHandler logoutHandler) {
        this.jwtAuthFilter = jwtAuthFilter;
        this.config = config;
        this.logoutHandler = logoutHandler;
    }

    private static final String[] WHITE_LIST_URL = {
            "/basvuru/save",
            "/mail/**",
            "/api/**",
            "/swagger-ui/**",
            "/v3/api-docs/**",
            "/swagger-ui.html",
            "/webjars/**",
            "/basvuru/getAll",
            "/basvuru/filtre"
    };

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(x ->
                        x.requestMatchers(WHITE_LIST_URL).permitAll()
                                .requestMatchers("/error","basvuru/getAll","/basvuru/filtre").hasAuthority(Role.ADMIN.name())
                )
                .sessionManagement(x -> x.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authenticationProvider(config.authenticationProvider())
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
                .logout(logout ->
                        logout.logoutUrl("/api/auth/logout")
                                .addLogoutHandler(logoutHandler)
                                .logoutSuccessHandler((request, response, authentication) -> SecurityContextHolder.clearContext()))
                .build();
    }
}


