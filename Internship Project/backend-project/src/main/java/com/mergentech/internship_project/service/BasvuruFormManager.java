package com.mergentech.internship_project.service;

import com.mergentech.internship_project.core.utilities.results.DataResult;
import com.mergentech.internship_project.core.utilities.results.Result;
import com.mergentech.internship_project.core.utilities.results.SuccessDataResult;
import com.mergentech.internship_project.dtos.requests.*;
import com.mergentech.internship_project.dtos.responses.BasvuruFormResponse;
import com.mergentech.internship_project.dtos.responses.SorguResponse;
import com.mergentech.internship_project.enums.Durumlar;
import com.mergentech.internship_project.exception.ResourceNotFoundException;
import com.mergentech.internship_project.mail.SendEmailService;
import com.mergentech.internship_project.model.BasvuruForm;
import com.mergentech.internship_project.repository.BasvuruFormDao;
import com.mergentech.internship_project.service.rules.BasvuruFormRules;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BasvuruFormManager implements BasvuruFormService {
    private final BasvuruFormDao basvuruFormDao;
    private final BasvuruFormRules basvuruFormRules;
    private final ModelMapper modelMapper;
    private final SendEmailService sendEmailService;
    private final DepartmanManager departmanManager;
    private final ProgDilManager progDilManager;




    public BasvuruFormManager(BasvuruFormDao basvuruFormDao, BasvuruFormRules basvuruFormRules, ModelMapper modelMapper,
                              SendEmailService sendEmailService, DepartmanManager departmanManager, ProgDilManager progDilManager) {
        this.basvuruFormDao = basvuruFormDao;
        this.basvuruFormRules = basvuruFormRules;
        this.modelMapper = modelMapper;
        this.sendEmailService = sendEmailService;
        this.departmanManager = departmanManager;
        this.progDilManager = progDilManager;
    }

    @Transactional
    @Override
    public Result save(@RequestBody BasvuruFormRequest request) {
        Result result = basvuruFormRules.save(request);
        if (result.isSuccess()) {
            BasvuruForm basvuruForm = modelMapper.map(request, BasvuruForm.class);
            basvuruFormDao.save(basvuruForm);

            DepartmanRequest departmanRequest = new DepartmanRequest();
            departmanRequest.setId(basvuruForm.getId());
            departmanRequest.setDepartmanlar(request.getDepartmanlar());
            departmanManager.saveDepartman(departmanRequest);

            for (ProgDilRequest dilRequest : request.getDiller()) {
                DilRequest dilRequest1 = new DilRequest();
                dilRequest1.setId(basvuruForm.getId());
                dilRequest1.setDilName(dilRequest.getDilName());
                dilRequest1.setDilSeviye(dilRequest.getDilSeviye());
                progDilManager.saveDil(dilRequest1);
            }
        }
        return result;
    }


    public DataResult<List<BasvuruFormResponse>> getAll() {
        return new SuccessDataResult<>(basvuruFormDao.findBasvuruForm(), "Başvurular listelendi!");
    }

//@Override
//public DataResult<List<BasvuruFormResponse>> getAll() {
//    List<BasvuruForm> basvuruForms = basvuruFormDao.findAll();
//    List<BasvuruFormResponse> responseList = basvuruForms.stream()
//            .map(basvuruForm -> modelMapper.map(basvuruForm, BasvuruFormResponse.class))
//            .collect(Collectors.toList());
//
//    return new SuccessDataResult<>(responseList, "Başvurular listelendi!");
//}

    public List<SorguResponse> listeleBasvuru(SorguParametre param) {
        // Parametrelerin boş listeler yerine null olmasını sağla
        if (param.getDepNames() != null && param.getDepNames().isEmpty()) {
            param.setDepNames(null);
        }
        if (param.getDilNames() != null && param.getDilNames().isEmpty()) {
            param.setDilNames(null);
        }
        if (param.getDilSeviyes() != null && param.getDilSeviyes().isEmpty()) {
            param.setDilSeviyes(null);
        }

        // BasvuruFormDao'dan listeleBasvuru metodunu çağır
        List<SorguResponse> results = basvuruFormDao.listeleBasvuru(
                param.getAdSoyad(),
                param.getEmail(),
                param.getTelefon(),
                param.getUniversite(),
                param.getBolum(),
                param.getSinif(),
                param.getLinkedinLink(),
                param.getGithubLink(),
                param.getCvLink(),
                param.getTarih(),
                param.getDurum()

        );

        // Sonuçları kontrol edip 'listelendi' mesajı döndür
        if (results != null && !results.isEmpty()) {
            System.out.println("Başvurular başarıyla listelendi.");
        } else {
            System.out.println("Listelenecek başvuru bulunamadı.");
        }

        return results;
    }


    @Transactional
    @Override
    public void updateBasvuruFormStatus(int id, Durumlar durum) {
        BasvuruForm basvuruForm = basvuruFormDao.findById(id).orElseThrow(() -> new ResourceNotFoundException("Kayıt bulunamadı: " + id));
        basvuruForm.setDurum(durum);
        basvuruFormDao.save(basvuruForm);
        sendEmailService.sendStatusEmail(basvuruForm);
    }
}
