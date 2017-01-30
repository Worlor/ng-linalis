import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { StarComponent } from './shared/component/star/star.component';
import {RoutingModule} from "./routing/routing.module";
import { WelcomeComponent } from './welcome/welcome.component';
import { DetailComponent } from './detail/detail.component';
import {UserService} from "./service/user.service";
import {StoreModule} from "@ngrx/store";
import {userReducer} from "./reducer/user";

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    StarComponent,
    WelcomeComponent,
    DetailComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(
      {users: userReducer}
    )
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
