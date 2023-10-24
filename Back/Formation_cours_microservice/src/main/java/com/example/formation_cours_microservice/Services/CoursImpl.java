package com.example.formation_cours_microservice.Services;

import com.example.formation_cours_microservice.Entities.Chapitre;
import com.example.formation_cours_microservice.Entities.Cours;
import com.example.formation_cours_microservice.Entities.Niveau;
import com.example.formation_cours_microservice.Entities.Specialite;
import com.example.formation_cours_microservice.Exceptions.NotFoundException;
import com.example.formation_cours_microservice.Repository.ChapitreRepository;
import com.example.formation_cours_microservice.Repository.CoursRepository;
import com.example.formation_cours_microservice.Repository.SpecialiteRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;

import static jdk.nashorn.internal.objects.Global.print;

@Service
@AllArgsConstructor
public class CoursImpl implements ImplServices<Cours>{

    private CoursRepository coursRepository;
    private SpecialiteRepository specialiteRepository;
    @Override
    public Cours Create(Cours cours) {
        return coursRepository.save(cours);
    }

    @Override
    public List<Cours> ReadAll() {
        return coursRepository.findAll();
    }

    @Override
    public Cours Update(Long id, Cours cours) {
        return coursRepository.save(cours);
    }

    @Override
    public void Delete(Long id) {
        coursRepository.deleteById(id);

    }

    @Override
    public Cours ReadOne(Long id) {
        return coursRepository.findById(id).orElseThrow(() -> new NotFoundException("Meal Not Found with this ID "));
    }

    @Transactional
    public Cours CreateCours(Cours cours ,Long specialiteId) {
        Specialite specialite = specialiteRepository.findById(specialiteId).orElseThrow(() -> new NotFoundException("Cours not found with ID: " + specialiteId));
        cours.setSpecialite(specialite);
        return coursRepository.save(cours);
    }

}
