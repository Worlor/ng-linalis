import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {WelcomeComponent} from "../welcome/welcome.component";
import {ListComponent} from "../list/list.component";
import {DetailComponent} from "../detail/detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch:'full'},
  { path: 'welcome', component: WelcomeComponent},
  { path: 'users', component: ListComponent },
  { path: 'users/:id', component: DetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }
