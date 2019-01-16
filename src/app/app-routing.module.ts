import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseListComponent} from "./course/course-list/course-list.component";
import {PlayerComponent} from "./player/player.component";
import {ScorecardComponent} from "./scorecard/scorecard.component";

const routes: Routes = [

  { path: 'welcome', component: CourseListComponent},
  { path: 'course', component: CourseListComponent},
  { path: 'player', component: PlayerComponent},
  { path: 'score', component: ScorecardComponent}

  // { path: 'contact/:id', component: ContactEditComponent },
  // { path: '**', redirectTo: '' }                  // <-- redirect to the list now
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

