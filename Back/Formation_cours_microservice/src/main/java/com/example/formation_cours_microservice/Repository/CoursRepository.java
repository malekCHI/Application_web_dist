package com.example.formation_cours_microservice.Repository;

import com.example.formation_cours_microservice.Entities.Cours;
import com.example.formation_cours_microservice.Entities.Niveau;
import com.example.formation_cours_microservice.Entities.Specialite;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CoursRepository extends JpaRepository<Cours,Long> {
    List<Cours> findByNameContainingIgnoreCase(String name);
    List<Cours> findByNiveau(Niveau niveau);
    List<Cours> findCoursBySpecialite(Specialite specialite);

}
