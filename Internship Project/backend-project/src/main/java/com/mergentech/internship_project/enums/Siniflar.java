package com.mergentech.internship_project.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;

import java.io.Serializable;

@Getter
public enum Siniflar implements Serializable {
    IKINCI_SINIF(2, "2. Sınıf"),
    UCUNCU_SINIF(3, "3. Sınıf"),
    DORDUNCU_SINIF(4, "4. Sınıf"),
    MEZUN(5, "Mezun");

    private final int id;
    private final String gorunen;

    Siniflar(int id, String gorunen) {
        this.id = id;
        this.gorunen = gorunen;
    }

    @JsonValue  // SAYI TÜRÜNDE DEĞER GELECEKSE BUNU YAZ
    public int getId() {
        return id;
    }

    @JsonCreator
    public static Siniflar valueOf(int id) {
        for (Siniflar siniflar : Siniflar.values()) {
            if (siniflar.getId() == id) {
                return siniflar;
            }
        }
        throw new IllegalArgumentException("Bilinmeyen değer: " + id);
    }

//    @JsonValue  // STRING TÜRÜNDE DEĞER GELECEKSE BUNU YAZ
//    public String getGorunen() {
//        return gorunen;
//    }
//
//    @JsonCreator
//    public static Siniflar fromGorunen(String gorunen) {
//        for (Siniflar siniflar : Siniflar.values()) {
//            if (siniflar.getGorunen().equalsIgnoreCase(gorunen)) {
//                return siniflar;
//            }
//        }
//        throw new IllegalArgumentException("Bilinmeyen değer: " + gorunen);
//    }
}
