package tn.esprit.microexam.controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tn.esprit.microexam.entities.Exam;
import tn.esprit.microexam.services.IExamService;

import java.util.List;
import java.util.Optional;
@RestController
@AllArgsConstructor
@CrossOrigin("*")
public class ExamController {

    private IExamService iExamService;

    @PostMapping("/addExam")
    public Exam addExam(@RequestBody Exam exam) {
        return iExamService.saveExam(exam);
    }

    @GetMapping("/allExams")
    public List<Exam> getAllReclamations () {
        return iExamService.findAllExams();
    }

    @GetMapping("/getExamById/{id}")
    public Optional<Exam> getExamById(@PathVariable Long id) {
        return iExamService.getExamById(id);
    }

    @PatchMapping("/updateExam")
    public Exam updateExam(@RequestBody Exam exam) {
        return iExamService.updateExam(exam);
    }

    @DeleteMapping("/deleteExam/{id}")
    public void deleteExam(@PathVariable Long id) {
        iExamService.deleteExam(id);
    }

}
