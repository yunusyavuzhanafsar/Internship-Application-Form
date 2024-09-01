package com.mergentech.internship_project.service.rules;

import com.mergentech.internship_project.core.utilities.results.ErrorResult;
import com.mergentech.internship_project.core.utilities.results.Result;
import com.mergentech.internship_project.core.utilities.results.SuccessResult;
import com.mergentech.internship_project.dtos.requests.BasvuruFormRequest;
import com.mergentech.internship_project.verification.EmailVerificationService;
import org.springframework.stereotype.Component;

@Component
public class BasvuruFormRules {
    public final EmailVerificationService emailVerificationService;

    public BasvuruFormRules(EmailVerificationService emailVerificationService) {
        this.emailVerificationService = emailVerificationService;
    }

    public Result save(BasvuruFormRequest request) {
        if (request.getAdSoyad() == null || request.getEmail() == null || request.getTelefon() == null ||
                request.getUniversite() == null || request.getBolum() == null || request.getSinif() == null ||
                request.getCvLink() == null || request.getDiller() == null || request.getTarih() == null) {
            return new ErrorResult("Lütfen gerekli alanları doldurunuz!");
        }
        if (!emailVerificationService.isEmailValid(request.getEmail())) {
            return new ErrorResult("Lütfen geçerli bir email giriniz!");
        }
        return new SuccessResult("Kayıt Başarılı!");
    }
}

