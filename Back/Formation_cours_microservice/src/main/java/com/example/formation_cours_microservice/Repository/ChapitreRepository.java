package com.example.formation_cours_microservice.Repository;

import com.example.formation_cours_microservice.Entities.Chapitre;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ChapitreRepository extends JpaRepository<Chapitre,Long> {

}
