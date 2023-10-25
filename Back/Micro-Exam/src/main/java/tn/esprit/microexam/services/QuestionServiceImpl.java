package tn.esprit.microexam.services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.webjars.NotFoundException;
import tn.esprit.microexam.entities.Exam;
import tn.esprit.microexam.entities.Question;
import tn.esprit.microexam.repositories.ExamRepository;
import tn.esprit.microexam.repositories.QuestionRepository;

import javax.transaction.Transactional;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class QuestionServiceImpl implements IQuestionService{

    private QuestionRepository questionRepository;
    private ExamRepository examRepository;


    @Transactional
    @Override
    public Question saveQuestion(Question question ,Long id) {
        Exam exam = examRepository.findById(id).orElseThrow(() -> new NotFoundException("Cours not found with ID: " + id));
        question.setExam(exam);
        return questionRepository.save(question);
    }
    /*public boolean saveQuestions(Long id,List<Question> questions) {
        Exam exam = examRepository.findById(id).orElse(null);
        exam.setIdE(id);
        if (exam != null) {
            try {
                for (Question question : questions) {
                    question.setExam(exam);
                    questionRepository.save(question);
                }

                return true;
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        return false;
    }*/








    @Override
    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }

    @Override
    public Optional<Question> getQuestionById(Long id) {
        return questionRepository.findById(id);
    }

    @Override
    public void deleteQuestion(Long id) {
        questionRepository.deleteById(id);
    }

    @Override
    public Question updateQuestion( Question question) {
        return questionRepository.save(question);
    }

    @Override
    public void assignQuestionToExam(Long idE, Long idQ) {
        Question q = questionRepository.findById(idE).orElse(null);
        Exam e = examRepository.findById(idQ).orElse(null);
        q.setExam(e);
        questionRepository.save(q);
    }


}
