import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupUsers: any[] = [];
  signupObj: any = {
    userName: '',
    email: '',
    password: '',
  };
  loginObj: any = {
    userName: '',
    password: '',
  };
  constructor(private route: ActivatedRoute) { }
ngOnInit(){
  const localData = localStorage.getItem('signUpUsers');
  if(localData != null) {
    this.signupUsers = JSON.parse(localData);
  }
}
onSignUp() {
this.signupUsers.push(this.signupObj);
localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
this.signupObj = {
  userName: '',
  email: '',
  password: ''
};
}
onLogin() {
    debugger
const isUserExist = this.signupUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
if(isUserExist != undefined) {
  alert('User Login Successfully');
} else{
  alert('wrong Credentials');
}
}

}
