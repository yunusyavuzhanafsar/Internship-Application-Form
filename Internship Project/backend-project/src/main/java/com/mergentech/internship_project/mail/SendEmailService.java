package com.mergentech.internship_project.mail;

import com.mergentech.internship_project.enums.Durumlar;
import com.mergentech.internship_project.model.BasvuruForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class SendEmailService {

    @Autowired
    private JavaMailSender javaMailSender;

    @Value("$(spring.mail.username)")
    private String gonderen;

    public void sendEmail(String alici, String body, String subject ) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(gonderen);
        message.setTo(alici);
        message.setText(body);
        message.setSubject(subject);
        javaMailSender.send(message);
    }

    public void sendStatusEmail(BasvuruForm basvuruForm) {
        String subject = "Staj Başvurunuz Hakkında";
        for (Durumlar deger : Durumlar.values()) {
            switch (deger) {
                case KABUL: {
                    String text = "Sayin " + basvuruForm.getAdSoyad() + " staj başvurunuz " + basvuruForm.getTarih()+ " icin kabul edilmiştir. Tebrikler! İlgili departman sizinle en kısa zamanda iletişime geçecektir.\n\n" +
                            "İlginiz için teşekkürler!";
                    sendEmail(basvuruForm.getEmail(), text, subject );
                    break;
                }
                case RET: {
                    String text = "Sayin" + basvuruForm.getAdSoyad() + "staj başvurunuz maalesef reddedilmiştir. İlginiz için teşekkür ederiz ve gelecekteki başvurularınızda başarılar dileriz.\n\n" +
                            "İlginiz için teşekkürler!";
                    sendEmail(basvuruForm.getEmail(), text, subject);
                    break;
                }
                case YEDEK: {
                    String text = "Sayin" + basvuruForm.getAdSoyad() + "staj başvurunuz yedek listeye alınmıştır. İlgili departman pozisyon açıldığında sizinle iletişime geçecektir.\n\n" +
                            "İlginiz için teşekkürler!";
                    sendEmail(basvuruForm.getEmail(), text, subject);
                    break;
                }
                default: {
                    throw new IllegalStateException("Beklenmeyen değer: " + deger);
                }
            }
            break;
        }
    }
}