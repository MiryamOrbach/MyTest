
import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/service/quiz.service';
import { Quiz } from 'src/models/quiz.model';


@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

    isShowMark: boolean = false;
    mark: number = 0;
    value: string = "next";
    quiz: Quiz[];
    currentQuestion: Quiz;


    constructor(private quizService: QuizService) {}


    ngOnInit() {
        this.getData();
    }

    getData(): void {
        this.quizService.getData()
            .subscribe(
            quiz => {
                this.quiz = quiz;
                console.log(this.quiz);
                this.currentQuestion = this.quiz[0];
            },
            err => {
                console.log(err);
            })
    }

    next() {
        if (this.value == "done")
            this.getMark();
        else {
            this.currentQuestion = this.quiz.find(q => this.currentQuestion.id + 1 == q.id);
            if (this.currentQuestion.id == this.quiz.length)
                this.value = "done";
        }
    }

    prev() {
        this.isShowMark = false;
        this.value = "next";
        this.currentQuestion = this.quiz.find(q => this.currentQuestion.id - 1 == q.id);
    }

    getMark() {
        this.mark = 0;
        for (let i = 0; i < this.quiz.length; i++) {
            if (this.quiz[i]['userChoose'] == this.quiz[i]['rightAnswer'])
                this.mark += 10;
        }
        this.isShowMark = true;
    }
}
