import { Component, OnInit, Renderer2 } from "@angular/core";
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
  styleUrls: ["./user-loged-page.component.scss"],
})
export class UserLogedPage implements OnInit {
  myEmotion:string;

  questions: Array<QuestionInterface>;
  user: any;
  info: string;
  watsonIsAnswer: boolean = false;
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
    private fontS: FontsService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.session.isLogged().subscribe(u => (this.user = u));
    this.questionS.getQuestions().subscribe(data => {
      this.questions = data;
    });
    //traer sólo una fuente al final al final
    this.fontS.getFonts().subscribe((data) => this.fonts = data)
    this.renderer.removeClass(document.body, this.session.myEmotion);
    this.renderer.addClass(document.body, this.session.myEmotion);
  }

  getEmotion() {
    this.watsonIsAnswer = true;
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
    this.formAnswer.push(ans);
    if ((this.formAnswer.length === this.questions.length)&&(this.watsonAnswer)) { 
      this.userEmotion.anger = (this.formAnswer[0] + Number(this.watsonAnswer.anger))/2;      
      this.userEmotion.fear = (this.formAnswer[1] + Number(this.watsonAnswer.fear))/2;
      this.userEmotion.joy = (this.formAnswer[2] + Number(this.watsonAnswer.joy))/2;
      this.userEmotion.analytical = (this.formAnswer[3] + Number(this.watsonAnswer.analytical))/2;
      this.userEmotion.confident = (this.formAnswer[4]+ Number(this.watsonAnswer.confident))/2;
      this.userEmotion.tentative = (this.formAnswer[5] + Number(this.watsonAnswer.tentative))/2;  
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
    
    this.myEmotion = this.currentEmotion(userEmotion);
    
    for (var key in this.fonts){
      for (var item in this.fonts[key].emotions){
        if(item === this.myEmotion){
          this.suitedArray.push([this.fonts[key].name,this.fonts[key]._id,this.fonts[key].emotions[item]])
        }
      }
    }

    this.suitedArray = this.suitedArray.sort((a,b)=>{
      return b[2] - a[2];
    })
    
    this.idFont = this.suitedArray[0][1]
    this.fontS.getFont(this.suitedArray[0][0]) 
  }
}
