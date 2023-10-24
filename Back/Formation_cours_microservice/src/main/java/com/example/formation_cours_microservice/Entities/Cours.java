package com.example.formation_cours_microservice.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Builder
@AllArgsConstructor
@Table( name = "Cours")
public class Cours implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    @Enumerated(EnumType.STRING)
    private Niveau niveau;
    @ManyToOne
    private Specialite specialite;

    @OneToMany(mappedBy = "cours")
    @JsonIgnore
    Set<Chapitre> chapitres=new HashSet<>();
}
