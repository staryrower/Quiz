import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
// ---Propeprties---
readonly rootUrl = 'http://localhost:52356';
qns: any[];
seconds: number;
timer;
qnProgress: number;

// ---Helper Methods---






  constructor(private http: HttpClient ) { }



// --- Http Methods---

insertParticipant(name: string, email: string) {
  const body = {
    Name: name,
    Email: email
  };
  return this.http.post(this.rootUrl + '/api/InsertParticipant', body);
}

getQuestions(){
  return this.http.get(this.rootUrl + '/api/Questions');
}
}
