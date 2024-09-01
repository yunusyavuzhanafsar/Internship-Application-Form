package com.mergentech.internship_project.dtos.responses;

import com.mergentech.internship_project.enums.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BasvuruFormResponse {
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
//    private List<DepartmanlarEnum> depName;
//    private List<DillerEnum> dilName;
//    private List<SeviyelerEnum> dilSeviye;
//    private String digerDep;
}




