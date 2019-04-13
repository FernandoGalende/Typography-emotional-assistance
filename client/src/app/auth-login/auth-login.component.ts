import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { SessionService } from "../Services/session.service";
import { Router } from "@angular/router"


@Component({
  selector: "app-auth-login",
  templateUrl: "./auth-login.component.html",
  styleUrls: ["./auth-login.component.scss"]
})
export class AuthLoginComponent implements OnInit {
  username: string;
  password: string;
  @Output() loginEvent = new EventEmitter<string>();

  constructor(public session: SessionService, public router: Router) {}

  ngOnInit() {
  }

  login(){
    this.session.login(this.username, this.password).subscribe(user=>{
      
      this.loginEvent.emit();
      this.router.navigate(['font/use']);

    })
  }
}
