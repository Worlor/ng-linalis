/**
 * Created by Worlor on 23/01/2017.
 */

export class User{
  id:number;
  title:string;
  firstName:string;
  lastName:string;
  email:string;
  phone:string;
  image:string;

  constructor(id:number,title:string, firstname:string, lastName:string, email: string, phone:string, image:string) {
    this.title = title;
    this.firstName = firstname;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.image = image;
  }
}
