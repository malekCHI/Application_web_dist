package com.example.formation_cours_microservice.Repository;

import com.example.formation_cours_microservice.Entities.Cours;
import com.example.formation_cours_microservice.Entities.Niveau;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CoursRepository extends JpaRepository<Cours,Long> {

}
