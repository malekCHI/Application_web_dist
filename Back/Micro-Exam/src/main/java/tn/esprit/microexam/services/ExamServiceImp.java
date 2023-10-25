package tn.esprit.microexam.services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.microexam.entities.Exam;
import tn.esprit.microexam.entities.Question;
import tn.esprit.microexam.repositories.ExamRepository;
import tn.esprit.microexam.repositories.QuestionRepository;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ExamServiceImp implements IExamService{

    private ExamRepository examRepository;


    @Override
    public Exam saveExam(Exam exam) {
        return examRepository.save(exam);
    }

    @Override
    public List<Exam> findAllExams() {
        return examRepository.findAll();
    }

    @Override
    public Optional<Exam> getExamById(Long id) {
        return examRepository.findById(id);
    }

    @Override
    public void deleteExam(Long id) {
        examRepository.deleteById(id);
    }

    @Override
    public Exam updateExam(Exam exam) {
            return examRepository.save(exam);
    }

}
