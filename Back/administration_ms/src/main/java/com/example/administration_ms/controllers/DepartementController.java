package com.example.administration_ms.controllers;

import com.example.administration_ms.entities.Departement;
import com.example.administration_ms.services.IDepartementService;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins ="http://localhost:4200")
@RestController
@RequestMapping("/depatments")
@AllArgsConstructor
public class DepartementController {
    private final IDepartementService depserv;


    @PostMapping("/addep")
    private ResponseEntity<?> create(@RequestBody Departement dep)
    {
         return depserv.addDepartement(dep);
    }
    @PutMapping("/updatedep/{id}")
    private ResponseEntity<?> updtae(@RequestBody Departement dep, @PathVariable Long id)
    {
        return depserv.updateDepartement(id,dep);
    }
    @GetMapping("/retrieve/{id}")
    private ResponseEntity<?> retrieve(@PathVariable Long id)
    {
        return depserv.retrieveDepartementById(id);
    }
    @GetMapping("/retrieve")
    private ResponseEntity<?> retrieveAll()
    {
        return depserv.retrieveDepartement();
    }
    @DeleteMapping("/deletedep/{id}")
    private ResponseEntity<?> delete(@PathVariable Long id)
    {
        return depserv.supprimerDepartement(id);
    }
}
