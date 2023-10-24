package com.example.formation_cours_microservice.Controllers;

import com.example.formation_cours_microservice.Entities.Chapitre;
import com.example.formation_cours_microservice.Entities.Cours;
import com.example.formation_cours_microservice.Entities.Niveau;
import com.example.formation_cours_microservice.Services.CoursImpl;
import com.example.formation_cours_microservice.Services.ImplServices;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Locale;

@RestController
@AllArgsConstructor
public class CoursController {

    private ImplServices<Cours> iService;
    private CoursImpl coursimpl;

    @GetMapping("/getCours")
    public List<Cours> Read()
    {
        return iService.ReadAll();
    }

    @GetMapping("/getOneCours/{idCours}")
    public Cours getOneCours(@PathVariable("idCours") Long ID)
    {
        return iService.ReadOne(ID);
    }

    @PostMapping("/addCours")
    public Cours addCours(@RequestBody Cours cours)
    {
        return iService.Create(cours);
    }
    @PutMapping("/updateCours/{idCours}")
    public Cours updateCours(@PathVariable("idCours") Long idCours, @RequestBody Cours cours){
        return iService.Update(idCours,cours);
    }

    @DeleteMapping("/deleteCours/{ID}")
    public void deleteCours(@PathVariable Long ID)
    {
        iService.Delete(ID);
    }


    @PostMapping("/createCoursandassinspecialit/{specialiteId}")
    public Cours createChapitreandassignspecialiteId(@RequestBody Cours cours, @PathVariable("specialiteId") Long specialiteId) {
        return coursimpl.CreateCours(cours, specialiteId);
    }
}
