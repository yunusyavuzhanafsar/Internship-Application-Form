package com.mergentech.internship_project.dtos.requests;

import com.mergentech.internship_project.enums.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SorguParametre {
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
    private List<DepartmanlarEnum> depNames;
    private List<DillerEnum> dilNames;
    private List<SeviyelerEnum> dilSeviyes;
    private String digerdep;
}
