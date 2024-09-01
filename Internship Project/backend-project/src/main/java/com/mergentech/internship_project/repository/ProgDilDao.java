package com.mergentech.internship_project.repository;

import com.mergentech.internship_project.model.ProgDil;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProgDilDao extends JpaRepository<ProgDil, Integer> {
}
