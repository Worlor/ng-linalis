import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../service/user.service";
import {Observable} from "rxjs";
import {User} from "../shared/model/user";
import {Store} from "@ngrx/store";
import {ADD_USER, RESET} from "../reducer/user";

interface UserState {
  users: User[];
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private router: Router,
  private userService: UserService,
  private store: Store<UserState>) {

  }

  users: Observable<User[]>;

  newUser: User;


  ngOnInit() {
    //this.getUsers();
    this.users = this.store.select('users');
    debugger;
    this.newUser = new User(0,null,"","","","","");
  }

  getUsers()
  {
    this.users = this.userService.getUsers();
  }

  onSubmit()
  {
    debugger;
    this.store.dispatch({type: ADD_USER, payload: this.newUser});
    console.log(this.users.subscribe());
    /*this.userService.createUser(this.newUser).subscribe();
    this.users.subscribe();*/
  }

  onReset()
  {
    this.store.dispatch({type: RESET});
  }


  gotoDetail(id)
  {
    this.router.navigate(['/users',id]);
  }

}
