import { Injectable } from '@angular/core';
import { Http,Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from "rxjs";
import {User} from "../shared/model/user";

@Injectable()
export class UserService {

  private url: string = "http://127.0.0.1:3000/users";

  constructor(private http: Http) {
  }

  getUsers(): Observable<User[]> {
    return this.http
      .get(this.url)
      .map((r: Response) => <User[]> r.json())
      .do(data => console.log('All: ' +  JSON.stringify(data)))
      .catch(this.handleError)
  }

  createUser(user: User):Observable<User> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url, JSON.stringify(user), options)
      .map(res => res.json())
      .catch(this.handleError);
  }


  private handleError(error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
