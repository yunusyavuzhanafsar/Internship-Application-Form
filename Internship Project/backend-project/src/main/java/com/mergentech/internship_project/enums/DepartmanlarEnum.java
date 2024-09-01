package com.mergentech.internship_project.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.Getter;

import java.io.Serializable;

@Getter
//@JsonSerialize(using = DepartmanlarEnumSerializer.class)
//@JsonDeserialize(using = DepartmanlarEnumDeserializer.class)
public enum DepartmanlarEnum implements Serializable {
    FRONTEND_GELISTIRME(0, "Frontend Geliştirme"),
    BACKEND_GELISTIRME(1, "Backend Geliştirme"),
    MOBIL_GELISTIRME(2, "Mobil Geliştirme"),
    DEVOPS(3, "Devops"),
    SISTEM_DESTEK(4, "Sistem Destek"),
    URUN_GELISTIRME(5, "Ürün Geliştirme"),
    INSAN_KAYNAKLARI(6, "İnsan Kaynakları"),
    EGITIM_TEKNOLOJILERI(7, "Eğitim Teknolojileri"),
    PAZARLAMA(8, "Pazarlama"),
    DIGER(9, "Diğer");

    private final int id;
    private final String gorunen;

    DepartmanlarEnum(int id, String gorunen) {
        this.id = id;
        this.gorunen = gorunen;
    }

    @Override
    public String toString() {
        return this.gorunen;
    }

    @JsonValue
    public String getGorunen() {
        return gorunen;
    }

    @JsonCreator
    public static DepartmanlarEnum fromGorunen(String gorunen) {
        for(DepartmanlarEnum departmanlar : DepartmanlarEnum.values()) {
            if(departmanlar.getGorunen().equalsIgnoreCase(gorunen)) {
                return departmanlar;
            }
        }
        throw new IllegalArgumentException("Bilinmeyen değer : " + gorunen);
    }

    @JsonCreator
    public static DepartmanlarEnum fromId(int id) {
        for(DepartmanlarEnum departmanlar : DepartmanlarEnum.values()) {
            if(departmanlar.getId() == id) {
                return departmanlar;
            }
        }
        throw new IllegalArgumentException("Bilinmeyen id : " + id);
    }
}
