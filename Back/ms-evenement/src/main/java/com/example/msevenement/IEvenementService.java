package com.example.msevenement;

import java.util.List;
import java.util.Optional;

public interface IEvenementService {
    List<Evenement> getAllEvenements();
    Evenement getEvenementById(Long id);
    public Evenement createEvenement(Evenement evenement);
    void deleteEvenement(Long id);
    Evenement updateEvenement(Long id, Evenement updatedEvenement);
}
