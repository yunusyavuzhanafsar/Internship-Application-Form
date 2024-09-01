package com.mergentech.internship_project.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;

import java.io.Serializable;

@Getter
public enum DillerEnum implements Serializable {
    JAVA(0, "Java"),
    CSHARP(1, "C#"),
    FLUTTER(2, "Flutter"),
    ANGULAR(3, "Angular"),
    HTML(4, "HTML"),
    CSS(5, "CSS"),
    BASH(6, "Bash"),
    SQL(7, "SQL");

    private final int id;
    private final String gorunen;

    DillerEnum(int id, String gorunen) {
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
    public static DillerEnum fromGorunen(String gorunen) {
        for (DillerEnum d : DillerEnum.values()) {
            if(d.gorunen.equalsIgnoreCase(gorunen)) {
                return d;
            }
        }
        throw new IllegalArgumentException("Bilinmeyen deger : " + gorunen);
    }
}
