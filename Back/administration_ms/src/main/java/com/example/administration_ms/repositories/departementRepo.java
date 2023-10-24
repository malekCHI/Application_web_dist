package com.example.administration_ms.repositories;

import com.example.administration_ms.entities.Departement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface departementRepo extends JpaRepository<Departement,Long> {
    Departement getDepartementByName(String name);
}
