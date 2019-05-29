import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http'; 
import { Quiz } from 'src/models/quiz.model';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs/internal/observable/throwError';




@Injectable()
export class QuizService {
    constructor(private http: HttpClient) { }

    getData(): Observable<any> {
        return this.http.get("../../assets/quiz.json").pipe(map(response => response), catchError(err => throwError(err)));
    }
}