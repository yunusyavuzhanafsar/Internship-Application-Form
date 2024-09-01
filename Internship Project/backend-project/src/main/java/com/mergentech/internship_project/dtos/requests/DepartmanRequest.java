package com.mergentech.internship_project.dtos.requests;

import com.mergentech.internship_project.enums.DepartmanlarEnum;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DepartmanRequest {
    private int id;
    private List<DepartmanlarEnum> departmanlar;
}
