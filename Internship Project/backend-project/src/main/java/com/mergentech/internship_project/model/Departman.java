package com.mergentech.internship_project.model;

import com.mergentech.internship_project.enums.DepartmanlarEnum;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "departmanlar")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Departman {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @ElementCollection(targetClass = DepartmanlarEnum.class)
    @CollectionTable(name = "departmanlar_enums", joinColumns = @JoinColumn(name = "departman_id"))
    @Column(name = "depName") // column name in the collection table
    @Enumerated(EnumType.STRING)
    private List<DepartmanlarEnum> depName;
//    private DepartmanlarEnum dep_name ; //DİREKT TABLO ADI GELECEK, DİLLER KISMI DA ÖYLE

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "basvuru_forms_id")
    private BasvuruForm basvuruForm;
}


