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
@Table( name = "Specialite")
public class Specialite implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Enumerated(EnumType.STRING)
    private NameSpecilite name;
    private String description;
    @OneToMany(mappedBy = "specialite")
    @JsonIgnore
    Set<Cours> cours=new HashSet<>();
}
