import { Component, OnInit } from "@angular/core";
import { SessionService } from "./../Services/session.service";
import { FontsService } from "../Services/fonts.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
  user: any;
  title: String;
  constructor(public session: SessionService, private fontS: FontsService) {}

  ngOnInit() {
    this.session.isLogged().subscribe(user => {
      this.user = user;
      console.log("USER EVENT");
      if (this.user) {
        this.title = `Feel free to express ${user.username}`;
      } else {
        this.title = "I don`t now how are you";
      }
    });
  }

  refreshUser() {
    this.session.isLogged().subscribe(user => {
      this.user = user;
    });
  }

  logout() {
    this.session.logout().subscribe(() => {
      this.user = null;
    });
  }
}
