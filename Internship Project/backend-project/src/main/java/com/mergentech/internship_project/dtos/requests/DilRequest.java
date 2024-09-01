package com.mergentech.internship_project.dtos.requests;

import com.mergentech.internship_project.enums.DillerEnum;
import com.mergentech.internship_project.enums.SeviyelerEnum;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Component
public class DilRequest {
    private int id;
    private List<DillerEnum> dilName;
    private List<SeviyelerEnum> dilSeviye;
}
