package com.mergentech.internship_project.controller;

import com.mergentech.internship_project.core.utilities.results.DataResult;
import com.mergentech.internship_project.core.utilities.results.Result;
import com.mergentech.internship_project.dtos.requests.BasvuruFormRequest;
import com.mergentech.internship_project.dtos.requests.SorguParametre;
import com.mergentech.internship_project.dtos.responses.BasvuruFormResponse;
import com.mergentech.internship_project.dtos.responses.SorguResponse;
import com.mergentech.internship_project.service.BasvuruFormService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/basvuru")
public class BasvuruController {
    private final BasvuruFormService basvuruFormService;

    public BasvuruController(BasvuruFormService basvuruFormService) {
        this.basvuruFormService = basvuruFormService;
    }

    @PostMapping("/save")
    public Result save(@RequestBody BasvuruFormRequest request) {
        return this.basvuruFormService.save(request);
    }

    @GetMapping("/getAll")
    public DataResult<List<BasvuruFormResponse>> getAll() {
        return this.basvuruFormService.getAll();
    }

    @PostMapping("/filtre")
    public List<SorguResponse> listeleBasvuru(@RequestBody SorguParametre param) {
        return this.basvuruFormService.listeleBasvuru(param);
    }

    @PutMapping("/updateStatus")
    public ResponseEntity<?> updateStatus(@RequestBody SorguParametre parameter) {
        basvuruFormService.updateBasvuruFormStatus(parameter.getId(), parameter.getDurum());
        return ResponseEntity.ok().build();
    }

}
