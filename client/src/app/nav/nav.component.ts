import { Component, OnInit } from '@angular/core';
import { SessionService } from "./../Services/session.service";
import { FontsService } from "../Services/fonts.service";



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [ SessionService, FontsService]

})
export class NavComponent implements OnInit {
  title: String;
  constructor(
    public session: SessionService,
    private fontS: FontsService
  ) { }

  ngOnInit() {
  }

}
