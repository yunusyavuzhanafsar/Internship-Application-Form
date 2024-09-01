package com.mergentech.internship_project.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;

import java.io.Serializable;

@Getter
public enum Durumlar implements Serializable {
    KABUL(0, "Kabul"),
    RET(1, "Ret"),
    YEDEK(2, "Yedek");

    private final int id;
    private final String gorunen;

    Durumlar(int id, String gorunen) {
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
    public static Durumlar fromGorunen(String gorunen) {
        for (Durumlar durumlar : Durumlar.values()) {
            if (durumlar.getGorunen().equalsIgnoreCase(gorunen)) {
                return durumlar;
            }
        }
        throw new IllegalArgumentException("Bilinmeyen değer: " + gorunen);
    }
}
