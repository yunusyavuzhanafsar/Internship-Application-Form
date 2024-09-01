package com.mergentech.internship_project.mail;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmailController {

    @Autowired
    private SendEmailService sendEmailService;

    @GetMapping("/sendEmail")
    public String sendEmail() {
        sendEmailService.sendEmail("muoak26@gmail.com", "Test arda", "Test subject");
        return "success";
    }
}
