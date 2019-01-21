import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseListComponent} from "./course/course-list/course-list.component";
import {ScorecardComponent} from "./scorecard/scorecard.component";
import {EndGameComponent} from "./end-game/end-game.component";
import {WelcomeComponent} from "./welcome/welcome.component";

const routes: Routes = [

  { path: 'welcome', component: WelcomeComponent},
  { path: 'course', component: CourseListComponent},
  { path: 'score', component: ScorecardComponent},
  { path: 'end-game', component: EndGameComponent},
  { path: '**', redirectTo: 'welcome' }
  // { path: 'contact/:id', component: ContactEditComponent },
  // { path: '**', redirectTo: '' }                  // <-- redirect to the list now
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

