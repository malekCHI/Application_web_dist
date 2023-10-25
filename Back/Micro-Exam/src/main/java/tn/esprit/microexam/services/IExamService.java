package tn.esprit.microexam.services;

import tn.esprit.microexam.entities.Exam;
import tn.esprit.microexam.entities.Question;

import java.util.List;
import java.util.Optional;

public interface IExamService {
    Exam saveExam(Exam exam);
    List<Exam> findAllExams();
    Optional<Exam> getExamById(Long id);
    void deleteExam(Long id);
    Exam updateExam(Exam exam);


}
