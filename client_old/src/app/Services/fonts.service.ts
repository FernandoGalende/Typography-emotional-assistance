import { Injectable, EventEmitter } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Observable } from "rxjs/Rx";
import { FontInterface } from "../interfaces/font-Interface";
import { environment }  from '../../environments/environment';

const  BASEURL:string= environment.BASEURL;

@Injectable()
export class FontsService {
  userEvent: EventEmitter<any> = new EventEmitter();
  options: any = { withCredentials: true };

  constructor(private http: Http) {}

  getFonts() {
    return this.http
      .get(`${BASEURL}/api/font`, this.options)
      .map((res: Response) => res.json());
  }
  getFont(id) {
    return this.http
      .get(`${BASEURL}/api/font/${id}`, this.options)
      .map((res: Response) => res.json());
  }
  

}


