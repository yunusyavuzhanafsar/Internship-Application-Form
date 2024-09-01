package com.mergentech.internship_project.token;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TokenDao extends JpaRepository<Token, Integer> {
    @Query("SELECT t FROM Token t INNER JOIN Admin a " +
            "ON t.admin.id = a.id " +
            "WHERE a.id = :id AND (t.expired = false OR t.revoked = false)")
    List<Token> findAllValidTokenByUser(int id);

    Optional<Token> findByToken(String token);
}
