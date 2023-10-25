import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  quizList: any[] = [];
  currentQuestionIndex = 1;
  questionForm: FormGroup;
  isLastQuestion: boolean = false;
  showQuiz: boolean = true;
  showSummary: boolean = false;
  selectedAnswers: string[] = [];
  showConfirmationPopup = false;
  confirmationMessage = '';
  questionCount: number = 0;

  constructor(
    public dataService: QuestionService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.questionForm = this.formBuilder.group({
      option: new FormControl('', Validators.required),
    });
    }
  getQuestionRange(): number[] {
    return Array(this.questionCount)
      .fill(0)
      .map((_, index) => index + 1);
  }

  
  ngOnInit(): void {
    this.quizList = this.dataService.questions.map((question) => ({
      question: question,
      option: '',
    }));
    this.questionCount = this.dataService.questions.length;
  }

  
  get lastQuestionIndex(): number {
    return this.dataService.questions.length;
  }

 
  showSection(param: string) {}

 
  nextQuestion() {
    if (this.currentQuestionIndex < this.dataService.questions.length) {
      // Enregistrer l'option sélectionnée pour la question actuelle
      this.quizList[this.currentQuestionIndex - 1].option =
        this.questionForm.value.option;
      this.currentQuestionIndex++;
      // Définir l'option sélectionnée pour la question suivante
      this.questionForm
        .get('option')
        ?.setValue(this.quizList[this.currentQuestionIndex - 1].option);
    }
  }

 
  previousQuestion() {
    if (this.currentQuestionIndex > 1) {
      // Enregistrer l'option sélectionnée pour la question actuelle
      this.quizList[this.currentQuestionIndex - 1].option =
        this.questionForm.value.option;
      this.currentQuestionIndex--;
      // Définir l'option sélectionnée pour la question précédente
      this.questionForm
        .get('option')
        ?.setValue(this.quizList[this.currentQuestionIndex - 1].option);
    }
  }


  optionSelected(option: string) {
    this.questionForm.get('option')?.setValue(option);
    this.selectedAnswers[this.currentQuestionIndex - 1] = option;
  }

  /**
   * The function "validateQuiz" hides the quiz and shows the summary.
   */
  validateQuiz() {
    this.showQuiz = false;
    this.showSummary = true;
  }

 
  confirmSaveAndSubmit() {
    // Vérifier si les réponses ont été enregistrées avec succès
    const isSaveSuccessful =
      this.selectedAnswers.length === this.dataService.questions.length;

    if (isSaveSuccessful) {
      this.confirmationMessage = 'Vos réponses ont été envoyées avec succès.';
    } else {
      this.confirmationMessage =
        "Erreur lors de l'envoi des réponses. Veuillez réessayer.";
    }

    // Afficher le pop-up de confirmation
    this.showConfirmationPopup = true;
  }

  getStatusIcon() {
    if (this.confirmationMessage.includes('succès')) {
      return '../../../../../assets/images/check.png';
    } else {
      return '../../../../../assets/images/erreur.png';
    }
  }

  closeConfirmationPopup() {
    this.showConfirmationPopup = false;
    this.confirmationMessage = '';
    this.router.navigate(['/examen']);
  }

}
