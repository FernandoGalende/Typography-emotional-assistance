import { Routes, RouterModule } from '@angular/router';
import { UserLogedPage } from './UserLogedPage/user-loged-page.component'
import { SingleFontComponent } from './SingleFont/SingleFont.component';
import { SingleProjectComponent } from './SingleProject/SingleProject.component';



export const routes: Routes = [
  { path: '', component: UserLogedPage },
  { path: "font/use", component: UserLogedPage },
  { path: "font/:id/:emotion", component: SingleFontComponent },
  { path: "font/case/use/:id", component: SingleProjectComponent }
];

