package com.example.administration_ms.services;

import com.example.administration_ms.entities.Departement;
import org.springframework.http.ResponseEntity;

public interface IDepartementService {
    ResponseEntity<?> addDepartement(Departement departement);
    ResponseEntity<?> updateDepartement(Long id, Departement departement);
    ResponseEntity<?>  supprimerDepartement(Long id);
    ResponseEntity<?>  retrieveDepartement();
    ResponseEntity<?>  retrieveDepartementById(Long id);
}
