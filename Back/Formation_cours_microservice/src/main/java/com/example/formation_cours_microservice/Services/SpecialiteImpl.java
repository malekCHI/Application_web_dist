package com.example.formation_cours_microservice.Services;

import com.example.formation_cours_microservice.Entities.Specialite;
import com.example.formation_cours_microservice.Exceptions.NotFoundException;
import com.example.formation_cours_microservice.Repository.SpecialiteRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@AllArgsConstructor
public class SpecialiteImpl implements ImplServices<Specialite> {

    private SpecialiteRepository specialiteRepository;

    @Override
    public Specialite Create(Specialite T) {
        return specialiteRepository.save(T);
    }

    @Override
    public List<Specialite> ReadAll() {
        return specialiteRepository.findAll();
    }

    @Override
    public Specialite Update(Long ID, Specialite T) {
        return specialiteRepository.save(T);
    }

    @Override
    public void Delete(Long ID) {
        specialiteRepository.deleteById(ID);
    }

    @Override
    public Specialite ReadOne(Long ID) {
        return specialiteRepository.findById(ID).orElseThrow(() -> new NotFoundException("Specilite Not Found with this ID "));
    }
}
