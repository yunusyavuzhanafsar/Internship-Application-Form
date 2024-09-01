package com.mergentech.internship_project.dtos.requests;

import com.mergentech.internship_project.enums.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BasvuruFormRequest {
    private String adSoyad;
    private String email;
    private String telefon;
    private String universite;
    private String bolum;
    private Siniflar sinif;
    private String linkedinLink;
    private String githubLink;
    private String cvLink;
    private List<DepartmanlarEnum> departman;
    private List<DillerEnum> progDil;
    private List<DepartmanlarEnum> departmanlar;
    private List<ProgDilRequest> diller;
    private Tarihler tarih;
    private String digerDep;
}

