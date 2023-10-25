package tn.esprit.microexam.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.microexam.entities.Exam;

public interface ExamRepository extends JpaRepository<Exam, Long> {
}
