import { Injectable, EventEmitter } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Observable } from "rxjs/Rx";

const BASEURL = "http://localhost:3000";

@Injectable()
export class FontInUseService {
  userEvent: EventEmitter<any> = new EventEmitter();
  options: any = { withCredentials: true };

  constructor(private http: Http) {}

  getFontInUse(info) {
    console.log(info);
    return this.http
      .post(`${BASEURL}/api/uses`, { info }, this.options)
      .map((res: Response) => {
        return res.json();
      });
  }
  getOneUse(id) {
    return this.http
      .get(`${BASEURL}/api/uses/use/${id}`, this.options)
      .map((res: Response) => {
        return res.json();
      });
  }
}
