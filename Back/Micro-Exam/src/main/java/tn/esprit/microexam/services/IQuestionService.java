package tn.esprit.microexam.services;

import tn.esprit.microexam.entities.Question;

import java.util.List;
import java.util.Optional;

public interface IQuestionService {
    public Question saveQuestion(Question question ,Long id) ;
    List<Question> getAllQuestions();
    Optional<Question> getQuestionById(Long id);
    void deleteQuestion(Long id);
    Question updateQuestion(Question question);
    void assignQuestionToExam(Long idE, Long idQ);

}
