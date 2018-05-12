import { Injectable, EventEmitter } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Observable } from "rxjs/Rx";
import { Answer } from "../interfaces/answer-interface";
import { SessionService } from "../Services/session.service";

const BASEURL = "http://localhost:3000";

@Injectable()
export class QuestionsService {
  userEvent: EventEmitter<any> = new EventEmitter();
  options: any = { withCredentials: true };
  userAnswer: Answer = {
    username: "",
    emotions: {
      anger: 0,
      fear: 0,
      joy: 0,
      analytical: 0,
      confident: 0,
      tentative: 0
    }
  };

  constructor(private http: Http, private session: SessionService) {}

  getQuestions() {
    return this.http
      .get(`${BASEURL}/api/question`, this.options)
      .map((res: Response) => res.json());
  }
  getAnswer(ans, whatsonAns) {
    this.userAnswer.username = this.session.user["username"];
    this.userAnswer.emotions.anger = (ans[0] + Number(whatsonAns.anger)) / 2;
    this.userAnswer.emotions.fear = (ans[1] + Number(whatsonAns.fear)) / 2;
    this.userAnswer.emotions.joy = (ans[2] + Number(whatsonAns.joy)) / 2;
    this.userAnswer.emotions.analytical = (ans[3] + Number(whatsonAns.analytical)) / 2;
    this.userAnswer.emotions.confident = (ans[4] + Number(whatsonAns.confident)) / 2;
    this.userAnswer.emotions.tentative = (ans[5] + Number(whatsonAns.tentative)) / 2;
    let res = Object.keys(this.userAnswer.emotions).find(k=>this.userAnswer.emotions[k]===Math.max(...Object.keys(this.userAnswer.emotions).map(k=>this.userAnswer.emotions[k])))
    console.log("2--->");
    console.log(res);
    // return this.http
    // .post(`${BASEURL}/api/question`,this.options,)
    // .map((res: Response) => res.json());
  }
}
