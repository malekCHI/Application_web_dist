package com.example.administration_ms.services;

import com.example.administration_ms.entities.Departement;
import com.example.administration_ms.repositories.departementRepo;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
@AllArgsConstructor
public class DepartementServImpl implements IDepartementService {

    private final departementRepo deprep;


    @Override
    public ResponseEntity<?> addDepartement(Departement departement) {
        try
        {
            if(deprep.getDepartementByName(departement.getName())!= null)
            {
                return ResponseEntity.badRequest().body("Departement Already Exists");
            }
              Departement dep =deprep.save(departement);
            return  ResponseEntity.ok(dep);
        } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error saving departement");
    }
    }

    @Override
    public ResponseEntity<?> updateDepartement(Long id, Departement departement) {
        try {
               Departement dept= deprep.findById(id).orElse(null);
            if(dept == null)
            {
                return ResponseEntity.badRequest().body("Departement Doesn't Exists");
            }
            dept.setActive(departement.getActive());
            dept.setName(departement.getName());
            dept.setStats(departement.getStats());
            dept.setSpecs(departement.getSpecs());
            dept.setHead(departement.getHead());
            dept.setDescription(departement.getDescription());
            Departement depp =deprep.save(dept);
            return  ResponseEntity.ok(depp);
        } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating Departement");
    }
    }

    @Override
    public ResponseEntity<?> supprimerDepartement(Long id) {
        try{
            Departement dept= deprep.findById(id).orElse(null);

            if(dept == null)
            {
                return ResponseEntity.badRequest().body("Departement Doesn't Exists");
            }
            deprep.deleteById(id);
            List<Departement> deps = deprep.findAll();
            return  ResponseEntity.ok(deps);
        }catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error Deleting Departement");
        }
    }

    @Override
    public ResponseEntity<?> retrieveDepartement() {
        try{
            List<Departement> deps = deprep.findAll();
            return  ResponseEntity.ok(deps);
        }catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error Retrieving Departement");
        }
    }

    @Override
    public ResponseEntity<?> retrieveDepartementById(Long id) {
        try{
            Departement dept= deprep.findById(id).orElse(null);

            if(dept == null)
            {
                return ResponseEntity.badRequest().body("Departement Doesn't Exists");
            }
            return  ResponseEntity.ok(dept);
        }catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error Retrieving Departement");
        }
    }
}
