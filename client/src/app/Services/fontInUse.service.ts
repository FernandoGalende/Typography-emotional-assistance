import { Injectable, EventEmitter } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Observable } from "rxjs/Rx";
import { environment }  from '../../environments/environment';

const  BASEURL:string= environment.BASEURL;

@Injectable()
export class FontInUseService {
  userEvent: EventEmitter<any> = new EventEmitter();
  options: any = { withCredentials: true };

  constructor(private http: Http) {}

  getFontInUse(info) {
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
