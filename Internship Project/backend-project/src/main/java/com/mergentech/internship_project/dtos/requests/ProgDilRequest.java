package com.mergentech.internship_project.dtos.requests;

import com.mergentech.internship_project.enums.DillerEnum;
import com.mergentech.internship_project.enums.SeviyelerEnum;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProgDilRequest {
    private List<DillerEnum> dilName;
    private List<SeviyelerEnum> dilSeviye;
}
