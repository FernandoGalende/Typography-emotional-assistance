import { Component, OnInit } from '@angular/core';
import { SessionService } from "./../Services/session.service";
import { QuestionsService } from '../Services/questions.service';
import { WatsonService } from '../Services/watson.service';
import { Observable } from "rxjs/Rx";
import { QuestionInterface } from "../interfaces/question-interface";


const BASEURL = "http://localhost:3000";

@Component({
  selector: 'app-user-loged-page',
  templateUrl: './user-loged-page.component.html',
  styleUrls: ['./user-loged-page.component.css'],
  providers: [ QuestionsService, SessionService, WatsonService ],
})
export class UserLogedPage implements OnInit {
  question: Array <QuestionInterface> 
  user:any;
  info: string;
  constructor(
    public session: SessionService,
    public questionS: QuestionsService,
    private watsonS: WatsonService,


  ) { }

  ngOnInit() {
    this.session.isLogged().subscribe(u=>this.user=u)
    this.questionS.getQuestions()
    .subscribe((data) => {
      this.question = data})
  }
  getEmotion(){
    this.watsonS.getEmotion(this.info).subscribe(data => {this.info = data})
  }

}
