import { Component, OnInit } from "@angular/core";
import { SessionService } from "./../Services/session.service";
import { QuestionsService } from "../Services/questions.service";
import { WatsonService } from "../Services/watson.service";
import { Observable } from "rxjs/Rx";
import { QuestionInterface } from "../interfaces/question-interface";
import { Emotion } from "../interfaces/emotions-interface";
import { FontsService } from "../Services/fonts.service";
import { FontInterface } from "../interfaces/font-Interface";
let _ = require('lodash');


const BASEURL = "http://localhost:3000";

@Component({
  selector: "app-user-loged-page",
  templateUrl: "./user-loged-page.component.html",
  styleUrls: ["./user-loged-page.component.css"],
  providers: [QuestionsService, SessionService, WatsonService,FontsService]
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
  fonts: object = {}
  suitedArray: Array<any>=[];
  idFont: string;
  constructor(
    public session: SessionService,
    public questionS: QuestionsService,
    private watsonS: WatsonService,
    private fontS: FontsService
  ) {}

  ngOnInit() {
    this.session.isLogged().subscribe(u => (this.user = u));
    this.questionS.getQuestions().subscribe(data => {
      this.questions = data;
    });
    this.fontS.getFonts()
    .subscribe((data) => this.fonts = data)
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
    console.log(this.watsonAnswer)
  }

  getAnswers(ans) { 
    console.log(ans)  
    this.formAnswer.push(ans);
    console.log(this.formAnswer)
    if ((this.formAnswer.length === this.questions.length)&&(this.watsonAnswer)) { 
      this.userEmotion.anger = (this.formAnswer[0] + Number(this.watsonAnswer.anger))/2;      
      this.userEmotion.fear = (this.formAnswer[1] + Number(this.watsonAnswer.fear))/2;
      this.userEmotion.joy = (this.formAnswer[2] + Number(this.watsonAnswer.joy))/2;
      this.userEmotion.analytical = (this.formAnswer[3] + Number(this.watsonAnswer.analytical))/2;
      this.userEmotion.confident = (this.formAnswer[4]+ Number(this.watsonAnswer.confident))/2;
      this.userEmotion.tentative = (this.formAnswer[5] + Number(this.watsonAnswer.tentative))/2;  
      console.log("termino la asignacion de preguntas") 
      console.log(this.formAnswer[5])
      console.log(this.userEmotion)
      this.mostSuitedFont(this.userEmotion);   
    } else {
      this.current++;
    }    
  }
  currentEmotion(emotions){
    var myArray = [];
    for (var key in emotions){
      myArray.push([key,emotions[key]])
    }
    myArray = myArray.sort((a,b)=>{
      return b[1] - a[1];
    })
    return myArray[0][0]
  }
  mostSuitedFont(userEmotion){
    var myEmotion = this.currentEmotion(userEmotion);
    
    for (var key in this.fonts){
      for (var item in this.fonts[key].emotions){
        if(item === myEmotion){
          this.suitedArray.push([this.fonts[key].name,this.fonts[key]._id,this.fonts[key].emotions[item]])
        }
      }
    }
    console.log("antes del sort")
    console.log(this.suitedArray)
    this.suitedArray = this.suitedArray.sort((a,b)=>{
      return b[2] - a[2];
    })
    console.log("despues del sort")
    console.log(this.suitedArray )
    console.log(`For a project which feels ${myEmotion} , I would recommend first ${this.suitedArray[0][0]}`)
    console.log(`For a project which feels ${myEmotion} , I would recommend second ${this.suitedArray[1][0]}`)
    console.log(this.suitedArray[0][1])
    this.idFont = this.suitedArray[0][1]
    this.fontS.getFont(this.suitedArray[0][0]) 
  }

  logout() {
    this.session.logout().subscribe(() => {
      this.user = null;
    });
  }
}
