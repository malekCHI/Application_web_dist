package tn.esprit.microexam.controllers;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tn.esprit.microexam.entities.Exam;
import tn.esprit.microexam.entities.Question;
import tn.esprit.microexam.services.IQuestionService;

import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@CrossOrigin("*")
public class QuestionController {

    private IQuestionService iQuestionService;


    @PostMapping("/addQuestion/{id}")
    public Question addQuestionsToExam(@RequestBody Question question, @PathVariable Long id) {
        return iQuestionService.saveQuestion(question, id);
    }

    @GetMapping("/allQuestions")
    public List<Question> getAllQuestions() {
        return iQuestionService.getAllQuestions();
    }

    @GetMapping("/getQuestionById/{id}")
    public Optional<Question> getQuestionById(@PathVariable Long id) {
        return iQuestionService.getQuestionById(id);
    }

    @PutMapping("/updateQuestion")
    public Question updateQuestion(@RequestBody Question question) {
        return iQuestionService.updateQuestion(question);
    }

    @DeleteMapping("/deleteQuestion/{id}")
    public void deleteQuestion(@PathVariable Long id) {
        iQuestionService.deleteQuestion(id);
    }

    @PostMapping("/assignQuestionToExam/{idQ}/{idE}")
    public void assignQuestionToExam(@PathVariable Long idQ, @PathVariable Long idE) {
        iQuestionService.assignQuestionToExam(idQ,idE);
    }
}
