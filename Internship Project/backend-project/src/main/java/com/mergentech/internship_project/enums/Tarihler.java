package com.mergentech.internship_project.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;

import java.io.Serializable;

@Getter
public enum Tarihler implements Serializable {
    BIRINCI_GRUP(0, "1 Temmuz-29 Temmuz"),
    IKINCI_GRUP(1,"5 Agustos-2 Eylul");
    //UCUNCU_GRUP(2,"3.Grup");

    private final int id;
    private final String gorunen;

    Tarihler(int id, String gorunen) {
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
    public static Tarihler fromGorunen(String gorunen) {
        for (Tarihler tarihler : Tarihler.values()) {
            if (tarihler.getGorunen().equalsIgnoreCase(gorunen)) {
                return tarihler;
            }
        }
        throw new IllegalArgumentException("Bilinmeyen değer: " + gorunen);
    }
}
