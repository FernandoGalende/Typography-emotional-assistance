import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { SessionService } from "../Services/session.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-auth-signup",
  templateUrl: "./auth-signup.component.html",
  styleUrls: ["./auth-signup.component.scss"]
})
export class AuthSignupComponent implements OnInit {
  username: string;
  password: string;
  name: string;
  @Output() signupEvent = new EventEmitter<string>();

  // secret: string;

  constructor(public session: SessionService, public router: Router) {}

  ngOnInit() {}
  signup() {
    const user = {
      username: this.username,
      password: this.password,
      name: this.username,
      // secret: this.secret
    };
    this.session.signup(user).subscribe(user=>{
      this.signupEvent.emit()
    });
  }
}
