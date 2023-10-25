package com.example.formation_cours_microservice.Repository;

import com.example.formation_cours_microservice.Entities.Specialite;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SpecialiteRepository extends JpaRepository<Specialite,Long> {
}
