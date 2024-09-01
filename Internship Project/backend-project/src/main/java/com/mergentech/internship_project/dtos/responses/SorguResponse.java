package com.mergentech.internship_project.dtos.responses;

import com.mergentech.internship_project.enums.Siniflar;
import com.mergentech.internship_project.enums.Tarihler;
import com.mergentech.internship_project.enums.Durumlar;
import com.mergentech.internship_project.enums.DepartmanlarEnum;
import com.mergentech.internship_project.enums.DillerEnum;
import com.mergentech.internship_project.enums.SeviyelerEnum;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
@Getter
@Setter
public class SorguResponse {

    private int id;
    private String adSoyad;
    private String email;
    private String telefon;
    private String universite;
    private String bolum;
    private Siniflar sinif;
    private String linkedinLink;
    private String githubLink;
    private String cvLink;
    private Tarihler tarih;
    private Durumlar durum;
//    private List<DepartmanlarEnum> depNames;
//    private List<DillerEnum> dilNames;
//    private List<SeviyelerEnum> dilSeviyes;
//    private String digerdep;

    // Parametreli yapıcı metod
    public SorguResponse(int id, String adSoyad, String email, String telefon, String universite,
                         String bolum, Siniflar sinif, String linkedinLink, String githubLink,
                         String cvLink, Tarihler tarih, Durumlar durum ) {
        this.id = id;
        this.adSoyad = adSoyad;
        this.email = email;
        this.telefon = telefon;
        this.universite = universite;
        this.bolum = bolum;
        this.sinif = sinif;
        this.linkedinLink = linkedinLink;
        this.githubLink = githubLink;
        this.cvLink = cvLink;
        this.tarih = tarih;
        this.durum = durum;
//        this.depNames = depNames;
//        this.dilNames = dilNames;
//        this.dilSeviyes = dilSeviyes;
//        this.digerdep = digerdep;
    }

    // Getters ve Setters (eğer gerekliyse)

    // Diğer gerekli metodlar
}
