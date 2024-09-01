package com.mergentech.internship_project.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.mergentech.internship_project.enums.*;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "basvuru_forms")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class BasvuruForm {
    @JsonBackReference
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "ad_soyad")
    private String adSoyad;

    @Column(name = "email")
    private String email;

    @Column(name = "telefon")
    private String telefon;

    @Column(name = "universite")
    private String universite;

    @Column(name = "bolum")
    private String bolum;

    @Column(name = "sinif")
    @Enumerated(EnumType.STRING)
    private Siniflar sinif;

    @Column(name = "linkedin_link")
    private String linkedinLink;

    @Column(name = "github_link")
    private String githubLink;

    @Column(name = "cv_link")
    private String cvLink;

    @Column(name = "tarih")
    @Enumerated(EnumType.STRING)
    private Tarihler tarih;

    @Column(name = "durum")
    @Enumerated(EnumType.STRING)
    private Durumlar durum;

    @ManyToOne()
    private Departman departman;

    @OneToMany(mappedBy = "basvuruForm")
    private List<ProgDil> progDil;

    @Column(name = "diger_dep")
    private String digerDep;
}

