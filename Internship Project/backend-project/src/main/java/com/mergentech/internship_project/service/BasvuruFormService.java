package com.mergentech.internship_project.service;

import com.mergentech.internship_project.core.utilities.results.DataResult;
import com.mergentech.internship_project.core.utilities.results.Result;
import com.mergentech.internship_project.dtos.requests.BasvuruFormRequest;
import com.mergentech.internship_project.dtos.requests.SorguParametre;
import com.mergentech.internship_project.dtos.responses.BasvuruFormResponse;
import com.mergentech.internship_project.dtos.responses.SorguResponse;
import com.mergentech.internship_project.enums.Durumlar;

import java.util.List;

public interface BasvuruFormService {
    Result save(BasvuruFormRequest request);

    DataResult<List<BasvuruFormResponse>>getAll();

   List<SorguResponse> listeleBasvuru(SorguParametre param);

    void updateBasvuruFormStatus(int id, Durumlar durum);
}
