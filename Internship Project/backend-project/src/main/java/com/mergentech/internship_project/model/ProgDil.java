package com.mergentech.internship_project.model;

import com.mergentech.internship_project.enums.DillerEnum;
import com.mergentech.internship_project.enums.SeviyelerEnum;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "diller")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProgDil {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @ElementCollection(targetClass = DillerEnum.class)
    @CollectionTable(name = "diller_enums", joinColumns = @JoinColumn(name = "prog_dil_id"))
    @Column(name = "dilName") // column name in the collection table
    @Enumerated(EnumType.STRING)
    private List<DillerEnum> dilName;
//    private DillerEnum dilName;

    @ElementCollection(targetClass = SeviyelerEnum.class)
    @CollectionTable(name = "seviyeler_enums", joinColumns = @JoinColumn(name = "prog_dil_id"))
    @Column(name = "dilSeviye") // column name in the collection table
    @Enumerated(EnumType.ORDINAL)
    private List<SeviyelerEnum> dilSeviye;
//    private SeviyelerEnum dilSeviye;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "basvuru_forms_id")
    private BasvuruForm basvuruForm;
}
