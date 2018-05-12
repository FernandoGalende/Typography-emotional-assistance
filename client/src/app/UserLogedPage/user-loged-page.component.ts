import { Component, OnInit } from "@angular/core";
import { SessionService } from "./../Services/session.service";
import { QuestionsService } from "../Services/questions.service";
import { WatsonService } from "../Services/watson.service";
import { Observable } from "rxjs/Rx";
import { QuestionInterface } from "../interfaces/question-interface";
import { Emotion } from "../interfaces/emotions-interface";

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
  userEmotion: Emotion = {
      anger: 0,
      fear: 0,
      joy: 0,
      analytical: 0,
      confident: 0,
      tentative: 0    
  };
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
  }

  getAnswers(ans) {   
    console.log(this.current)
    this.answers.push(ans);
    console.log(this.answers)
    if ((this.answers.length === this.questions.length)&&(this.watsonAnswer)) { 
      this.userEmotion.anger = this.answers[0] + this.watsonAnswer.anger;      
      this.userEmotion.fear = ans[1] + this.watsonAnswer.fear;
      this.userEmotion.joy = ans[2] + this.watsonAnswer.joy;
      this.userEmotion.analytical = ans[3] + this.watsonAnswer.analytical;
      this.userEmotion.confident = ans[4] + this.watsonAnswer.confident;
      this.userEmotion.tentative = ans[5] + this.watsonAnswer.tentative;
      console.log("watsonUna--->");
      console.log(this.watsonAnswer.joy)
      console.log("watson--->");
      console.log(this.watsonAnswer)
      console.log("sumados--->");
      console.log(this.userEmotion)      
      let res = Object.keys(this.userEmotion).find(k=>this.userEmotion[k]===Math.max(...Object.keys(this.userEmotion).map(k=>this.userEmotion[k])))
      console.log("resultado--->");
      console.log(res);
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
