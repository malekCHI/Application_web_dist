package com.example.msevenement;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value="/evenement")
@AllArgsConstructor
public class EvenementRestAPI {

    private final IEvenementService evenementService ;


    @PostMapping("/createvent")
    public ResponseEntity<Evenement> CreateCandidat (@RequestBody Evenement evenement) {
        return new ResponseEntity<Evenement>(evenementService.createEvenement(evenement) , HttpStatus.CREATED ) ;
    }

    @PutMapping( "/updatevent/{id}")
    public ResponseEntity<Evenement> UpdateCandidat (@PathVariable Long id  , @RequestBody Evenement evenement) {
        return new ResponseEntity<Evenement>(evenementService.updateEvenement(id , evenement) , HttpStatus.OK ) ;
    }

    @DeleteMapping ( "/deletevent/{id}" )
    public void DeleteEvenement (@PathVariable  Long id ){
        evenementService.deleteEvenement(id) ;
    }

    @GetMapping("/getevent/{id}")
    public Evenement getevent(@PathVariable Long id){
        return evenementService.getEvenementById(id) ;
    }
    @GetMapping("/getevent")
    public List<Evenement> getevent(){
        return evenementService.getAllEvenements() ;
    }


}
