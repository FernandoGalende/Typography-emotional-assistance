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
  watsonAnswer: Emotion = {
      anger: 0,
      fear: 0,
      joy: 0,
      analytical: 0,
      confident: 0,
      tentative: 0  
   };
  formAnswer: Array<number> = [];
  current: number = 0;
  title: String;
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
      this.watsonAnswer.anger = data.anger;
      this.watsonAnswer.fear = data.fear;
      this.watsonAnswer.joy = data.joy;
      this.watsonAnswer.analytical = data.analytical;
      this.watsonAnswer.confident = data.confident;
      this.watsonAnswer.tentative = data.tentative;      
    });
  }

  getAnswers(ans) {   
    console.log(this.current)
    this.formAnswer.push(ans);
    console.log(this.formAnswer)
    if ((this.formAnswer.length === this.questions.length)&&(this.watsonAnswer)) { 
      this.userEmotion.anger = this.formAnswer[0] + Number(this.watsonAnswer.anger);      
      this.userEmotion.fear = this.formAnswer[0] + Number(this.watsonAnswer.fear);
      this.userEmotion.joy = this.formAnswer[0] + Number(this.watsonAnswer.joy);
      this.userEmotion.analytical = this.formAnswer[0] + Number(this.watsonAnswer.analytical);
      this.userEmotion.confident = this.formAnswer[0]+ Number(this.watsonAnswer.confident);
      this.userEmotion.tentative = this.formAnswer[0] + Number(this.watsonAnswer.tentative);
         
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
