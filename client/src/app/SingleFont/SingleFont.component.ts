import { Component, OnInit } from "@angular/core";
import { FontsService } from "../Services/fonts.service";
import { FontInterface } from "../interfaces/font-Interface";
import { ActivatedRoute } from "@angular/router";
import { SessionService } from "./../Services/session.service";
import { promised } from "q";
import { FontInUseService } from "./../Services/fontInUse.service";

@Component({
  selector: "app-SingleFont",
  templateUrl: "./SingleFont.component.html",
  styleUrls: ["./SingleFont.component.scss"]
})
export class SingleFontComponent implements OnInit {
  font: any = {};
  fontUses: any = {};
  myEmotion: String;

  constructor(
    private route: ActivatedRoute,
    private fontS: FontsService,
    private fontInUseS: FontInUseService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.fontS.getFont(params["id"]).subscribe(data1 => {
        this.font = data1;
        this.fontInUseS.getFontInUse(this.font.name).subscribe(data2 => {
          this.fontUses = data2;
        });
      });
    });
    this.route.params.subscribe(params =>{
      this.myEmotion = params['emotion'];
      
    })  
  }  
}
