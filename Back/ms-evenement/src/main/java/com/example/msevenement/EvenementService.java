package com.example.msevenement;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class EvenementService implements IEvenementService{

    private final EvenementRepository evenementRepository;


    @Override
    public List<Evenement> getAllEvenements() {
        return (List<Evenement>) evenementRepository.findAll();
    }

    @Override
    public Evenement getEvenementById(Long id) {
        return evenementRepository.findById(id).orElse(null);
    }

    @Override
    public Evenement createEvenement(Evenement evenement) {
        return evenementRepository.save(evenement);
    }

    @Override
    public void deleteEvenement(Long id) {
        evenementRepository.deleteById(id);
    }
    @Override
    public Evenement updateEvenement(Long id, Evenement updatedEvenement) {
        Evenement existingEvenement = evenementRepository.findById(id).orElse(null);

        if (existingEvenement != null) {
            existingEvenement.setNom(updatedEvenement.getNom());
            existingEvenement.setDescription(updatedEvenement.getDescription());
            existingEvenement.setDateDebut(updatedEvenement.getDateDebut());
            existingEvenement.setDateFin(updatedEvenement.getDateFin());
            existingEvenement.setLieu(updatedEvenement.getLieu());
            existingEvenement.setOrganisateur(updatedEvenement.getOrganisateur());

            return evenementRepository.save(existingEvenement);
        } else {
            return null;
        }


    }

}
