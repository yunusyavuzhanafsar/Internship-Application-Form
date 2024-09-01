package com.mergentech.internship_project.repository;

import com.mergentech.internship_project.dtos.responses.BasvuruFormResponse;
import com.mergentech.internship_project.dtos.responses.SorguResponse;
import com.mergentech.internship_project.enums.*;
import com.mergentech.internship_project.model.BasvuruForm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BasvuruFormDao extends JpaRepository<BasvuruForm, Integer> {


    @Query("SELECT distinct new com.mergentech.internship_project.dtos.responses.SorguResponse(" +
            "s.id, s.adSoyad, s.email, s.telefon, s.universite, s.bolum, s.sinif, " +
            "s.linkedinLink, s.githubLink, s.cvLink, s.tarih, s.durum " +
            ") " +
            "FROM BasvuruForm s " +
            "WHERE (:adSoyad IS NULL OR s.adSoyad = :adSoyad) " +
            "AND (:email IS NULL OR s.email = :email) " +
            "AND (:telefon IS NULL OR s.telefon = :telefon) " +
            "AND (:universite IS NULL OR s.universite = :universite) " +
            "AND (:bolum IS NULL OR s.bolum = :bolum) " +
            "AND (:sinif IS NULL OR s.sinif = :sinif) " +
            "AND (:linkedinLink IS NULL OR s.linkedinLink = :linkedinLink) " +
            "AND (:githubLink IS NULL OR s.githubLink = :githubLink) " +
            "AND (:cvLink IS NULL OR s.cvLink = :cvLink) " +
            "AND (:tarih IS NULL OR s.tarih = :tarih) " +
            "AND (:durum IS NULL OR s.durum = :durum)")
    List<SorguResponse> listeleBasvuru(
            @Param("adSoyad") String adSoyad,
            @Param("email") String email,
            @Param("telefon") String telefon,
            @Param("universite") String universite,
            @Param("bolum") String bolum,
            @Param("sinif") Siniflar sinif,
            @Param("linkedinLink") String linkedinLink,
            @Param("githubLink") String githubLink,
            @Param("cvLink") String cvLink,
            @Param("tarih") Tarihler tarih,
            @Param("durum") Durumlar durum
    );









    @Query("SELECT new com.mergentech.internship_project.dtos.responses.BasvuruFormResponse(" +
            "b.id, b.adSoyad, b.email, b.telefon, b.universite, b.bolum, b.sinif, " +
            "b.linkedinLink, b.githubLink, b.cvLink, b.tarih, b.durum )" +

            "FROM BasvuruForm b " +
            "JOIN Departman d ON b.id = d.basvuruForm.id " +
            "JOIN ProgDil p ON b.id = p.basvuruForm.id")
    List<BasvuruFormResponse> findBasvuruForm();
}



