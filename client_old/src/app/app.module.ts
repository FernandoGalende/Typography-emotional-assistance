import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SessionService } from "./Services/session.service";
import { RouterModule, Routes } from "@angular/router"
import { routes } from './routes';

import { AppComponent } from './app.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { UserLogedPage } from './UserLogedPage/user-loged-page.component';
import { SingleFontComponent } from './SingleFont/SingleFont.component';
import { SingleProjectComponent } from './SingleProject/SingleProject.component';
import { NavComponent } from './nav/nav.component';

import { QuestionsService } from "./Services/questions.service";
import { WatsonService } from "./Services/watson.service";
import { FontsService } from "./Services/fonts.service";
import { FontInUseService } from "./Services/fontInUse.service";
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    AuthLoginComponent,
    AuthSignupComponent,
    UserLogedPage,
    SingleFontComponent,
    SingleProjectComponent,
    NavComponent,
    FooterComponent,
    HomeComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [QuestionsService, SessionService, WatsonService, FontsService, FontInUseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
