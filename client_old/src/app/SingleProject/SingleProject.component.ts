import { Component, OnInit } from "@angular/core";
import { FontsService } from "../Services/fonts.service";
import { FontInterface } from "../interfaces/font-Interface";
import { ActivatedRoute } from "@angular/router";
import { SessionService } from "./../Services/session.service";
import { promised } from "q";
import { FontInUseService } from "./../Services/fontInUse.service";

@Component({
  selector: "app-SingleProject",
  templateUrl: "./SingleProject.component.html",
  styleUrls: ["./SingleProject.component.scss"],
})
export class SingleProjectComponent implements OnInit {
  case: any = {};

  constructor(
    private route: ActivatedRoute,
    private fontInUseS: FontInUseService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.fontInUseS.getOneUse(params["id"]).subscribe(data => {
          this.case = data;        
      });
    });
  }
}
