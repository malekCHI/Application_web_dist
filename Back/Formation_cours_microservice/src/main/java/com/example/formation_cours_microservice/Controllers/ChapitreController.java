package com.example.formation_cours_microservice.Controllers;

import com.example.formation_cours_microservice.Entities.Chapitre;
import com.example.formation_cours_microservice.Services.ChapitreImpl;
import com.example.formation_cours_microservice.Services.ImplServices;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
public class ChapitreController {
    private ImplServices<Chapitre> iService;
    private ChapitreImpl chapitreimpl;

    @GetMapping("/getChapitre")
    public List<Chapitre> Read()
    {
        return iService.ReadAll();
    }

    @GetMapping("/getOneChapitre/{idChapitre}")
    public Chapitre getOneChapitre(@PathVariable("idChapitre") Long ID)
    {
        return iService.ReadOne(ID);
    }

    @PostMapping("/addChapitre")
    public Chapitre addChapitre(@RequestBody Chapitre chapitre)
    {
        return iService.Create(chapitre);
    }
    @PutMapping("/updateChapitre/{idChapitre}")
    public Chapitre updateChapitre(@PathVariable("idChapitre") Long ID, @RequestBody Chapitre chapitre){
        return iService.Update(ID,chapitre);
    }

    @DeleteMapping("/deleteChapitre/{ID}")
    public void deleteChapitre(@PathVariable Long ID)
    {
        iService.Delete(ID);
    }

    @PostMapping("/createChapitreandassigntocours/{coursId}")
    public Chapitre createChapitreandassigntocours(@RequestBody Chapitre chapitre, @PathVariable("coursId") Long coursId) {
        return chapitreimpl.CreateChapitre(chapitre, coursId);
    }

}
