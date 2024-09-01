package com.mergentech.internship_project.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;

import java.io.Serializable;

@Getter
public enum SeviyelerEnum implements Serializable {
    COK_KOTU(0),
    KOTU(1),
    ORTA(2),
    IYI(3),
    COK_IYI(4),
    MUKEMMEL(5);

    private final int id;

    SeviyelerEnum(int id) {
        this.id = id;
    }

    @JsonValue
    public int getId() {
        return id;
    }

    @JsonCreator
    public static SeviyelerEnum getById(int id) {
        for (SeviyelerEnum seviyeler : SeviyelerEnum.values()) {
            if (seviyeler.getId() == id) {
                return seviyeler;
            }
        }
        throw new IllegalArgumentException("Bilinmeyen değer: " + id);
    }
}
