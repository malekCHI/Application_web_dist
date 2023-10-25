package com.example.formation_cours_microservice.Controllers;

import com.example.formation_cours_microservice.Entities.Specialite;
import com.example.formation_cours_microservice.Services.ImplServices;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin("*")
public class SpecialiteController {

    private ImplServices<Specialite> iService;

    @GetMapping("/getSpecialite")
    public List<Specialite> Read()
    {
        return iService.ReadAll();
    }

    @GetMapping("/getOneSpecialite/{idSpecialite}")
    public Specialite getOneSpecialite(@PathVariable("idSpecialite") Long ID)
    {
        return iService.ReadOne(ID);
    }

    @PostMapping("/addSpecialite")
    public Specialite addSpecialite(@RequestBody Specialite Specialite)
    {
        return iService.Create(Specialite);
    }
    @PutMapping("/updateSpecialite/{idSpecialite}")
    public Specialite updateRessources(@PathVariable("idRessources") Long ID, @RequestBody Specialite specialite){
        return iService.Update(ID,specialite);
    }

    @DeleteMapping("/deleteSpecialite/{ID}")
    public void deleteSpecialite(@PathVariable Long ID)
    {
        iService.Delete(ID);
    }
}
