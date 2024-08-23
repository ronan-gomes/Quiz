import { Quiz } from './../quiz';
import { QuizService } from '../quiz.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrl: './quiz-list.component.css',
})
export class QuizListComponent {
  quizzes!: Quiz[]
  constructor(private QuizService: QuizService){}
  ngOnInit():void{
    this.QuizService.readQuizzes().subscribe(quizzes =>{
      this.quizzes = quizzes
      console.log(quizzes);
    })

  }
}
