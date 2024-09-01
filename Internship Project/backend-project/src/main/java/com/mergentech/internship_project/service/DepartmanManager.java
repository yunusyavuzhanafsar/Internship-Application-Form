package com.mergentech.internship_project.service;

import com.mergentech.internship_project.dtos.requests.DepartmanRequest;
import com.mergentech.internship_project.model.BasvuruForm;
import com.mergentech.internship_project.model.Departman;
import com.mergentech.internship_project.repository.BasvuruFormDao;
import com.mergentech.internship_project.repository.DepartmanDao;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class DepartmanManager implements DepartmanService {
    private final DepartmanDao departmanDao;
    private final BasvuruFormDao basvuruFormDao;

    public DepartmanManager(DepartmanDao departmanDao, BasvuruFormDao basvuruFormDao) {
        this.departmanDao = departmanDao;
        this.basvuruFormDao = basvuruFormDao;
    }

    @Override
    public void saveDepartman(DepartmanRequest departmanRequest) {

        Departman departman = new Departman();

        departman.setId(departmanRequest.getId());

        departman.setDepName(departmanRequest.getDepartmanlar());

        BasvuruForm basvuruForm = basvuruFormDao.findById(departmanRequest.getId())
                .orElseThrow(() -> new EntityNotFoundException("Id bulunamadı"));

        departman.setBasvuruForm(basvuruForm);

        departmanDao.save(departman);
    }
}
