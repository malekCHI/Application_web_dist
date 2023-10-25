package tn.esprit.microexam.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.microexam.entities.Question;

public interface QuestionRepository extends JpaRepository<Question,Long > {
}
