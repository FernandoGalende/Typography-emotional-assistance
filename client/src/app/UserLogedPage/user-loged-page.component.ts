import { Component, OnInit } from "@angular/core";
import { SessionService } from "./../Services/session.service";
import { QuestionsService } from "../Services/questions.service";
import { WatsonService } from "../Services/watson.service";
import { Observable } from "rxjs/Rx";
import { QuestionInterface } from "../interfaces/question-interface";

const BASEURL = "http://localhost:3000";

@Component({
  selector: "app-user-loged-page",
  templateUrl: "./user-loged-page.component.html",
  styleUrls: ["./user-loged-page.component.css"],
  providers: [QuestionsService, SessionService, WatsonService]
})
export class UserLogedPage implements OnInit {
  questions: Array<QuestionInterface>;
  user: any;
  info: string;
  watsonAnswer: any;
  answers: Array<number> = [];
  current: number = 0;
  title: string;
  constructor(
    public session: SessionService,
    public questionS: QuestionsService,
    private watsonS: WatsonService
  ) {}

  ngOnInit() {
    this.session.isLogged().subscribe(u => (this.user = u));
    this.questionS.getQuestions().subscribe(data => {
      this.questions = data;
    });
  }

  getEmotion() {
    this.watsonS.getEmotion(this.info).subscribe(data => {
      this.watsonAnswer = data;
    });
    console.log(this.watsonAnswer);
  }

  getAnswers(ans) {
    this.answers.push(ans);
    if (this.answers.length === 5) {
      this.questionS.getAnswer(this.answers);
    } else {
      this.current++;
    }
  }

  logout() {
    this.session.logout().subscribe(() => {
      this.user = null;
    });
  }
}
