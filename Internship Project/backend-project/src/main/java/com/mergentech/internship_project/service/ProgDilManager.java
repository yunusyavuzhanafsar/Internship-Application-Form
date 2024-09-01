package com.mergentech.internship_project.service;

import com.mergentech.internship_project.dtos.requests.DilRequest;
import com.mergentech.internship_project.model.BasvuruForm;
import com.mergentech.internship_project.model.ProgDil;
import com.mergentech.internship_project.repository.BasvuruFormDao;
import com.mergentech.internship_project.repository.ProgDilDao;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class ProgDilManager implements ProgDilService {

    private final BasvuruFormDao basvuruFormDao;
    private final ProgDilDao progDilDao;

    public ProgDilManager(BasvuruFormDao basvuruFormDao, ProgDilDao progDilDao) {
        this.basvuruFormDao = basvuruFormDao;
        this.progDilDao = progDilDao;
    }

    @Override
    public void saveDil(DilRequest dilRequest) {
        ProgDil progDil = new ProgDil();
        progDil.setId(dilRequest.getId());
        progDil.setDilName(dilRequest.getDilName());
        progDil.setDilSeviye(dilRequest.getDilSeviye());

        BasvuruForm basvuruForm = basvuruFormDao.findById(dilRequest.getId())
                .orElseThrow(() -> new EntityNotFoundException("Id bulunamadı"));

        progDil.setBasvuruForm(basvuruForm);
        progDilDao.save(progDil);
    }
}
