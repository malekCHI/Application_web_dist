package com.example.formation_cours_microservice.Services;

import com.example.formation_cours_microservice.Entities.Chapitre;
import com.example.formation_cours_microservice.Entities.Cours;
import com.example.formation_cours_microservice.Exceptions.NotFoundException;
import com.example.formation_cours_microservice.Repository.ChapitreRepository;
import com.example.formation_cours_microservice.Repository.CoursRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ChapitreImpl implements ImplServices<Chapitre> {

    private ChapitreRepository chapitreRepository;
    private CoursRepository coursRepository;
    @Transactional
    public Chapitre CreateChapitre(Chapitre chapitre ,Long coursId) {
        Cours cours = coursRepository.findById(coursId).orElseThrow(() -> new NotFoundException("Cours not found with ID: " + coursId));
        chapitre.setCours(cours);
        return chapitreRepository.save(chapitre);
    }

    @Override
    public Chapitre Create(Chapitre T) {
        return null;
    }

    @Override
    public List<Chapitre> ReadAll() {
        return chapitreRepository.findAll();
    }

    @Override
    public Chapitre Update(Long ID, Chapitre T) {
        return chapitreRepository.save(T);
    }

    @Override
    public void Delete(Long ID) {
        chapitreRepository.deleteById(ID);
    }

    @Override
    public Chapitre ReadOne(Long ID) {
        return chapitreRepository.findById(ID).orElseThrow(() -> new NotFoundException("Chapitre Not Found with this ID "));
    }

    public List<Chapitre> findChapitresByCours_Id(Long id){
        return chapitreRepository.findChapitresByCours_Id(id);
    }

    public void markChapitreAsCompleted(Long id) {
        Optional<Chapitre> chapitre = chapitreRepository.findById(id);
        chapitre.ifPresent(c -> {
            c.setCompleted(true);
            chapitreRepository.save(c);
        });
    }

}
