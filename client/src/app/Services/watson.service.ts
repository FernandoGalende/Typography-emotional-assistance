import { Injectable, EventEmitter } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Observable } from "rxjs/Rx";

const BASEURL = "http://localhost:3000";

@Injectable()
export class WatsonService {
  userEvent: EventEmitter<any> = new EventEmitter();
  options: any = { withCredentials: true };

  constructor(private http: Http) {}

  getEmotion(info) {
    return this.http
      .post(`${BASEURL}/api/watson`, { info }, this.options)
      .map((res: Response) => {
        return res.json();
      });
  }
}
