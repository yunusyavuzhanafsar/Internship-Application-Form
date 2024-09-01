package com.mergentech.internship_project.repository;

import com.mergentech.internship_project.model.Departman;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartmanDao extends JpaRepository<Departman, Integer> {

}
