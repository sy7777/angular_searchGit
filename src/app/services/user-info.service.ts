import { Injectable } from '@angular/core';

// service可以传输HTTPS请求，也可以存储一些数据放在localstorage
@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  private userInfo: any;
  private users = [{nickName: "admin", password:"hireyou", email:"admin@example.com"}];
  private isLogin:boolean;

  constructor() {
    if(!window.localStorage.getItem("users")){
      window.localStorage.setItem("users", JSON.stringify(this.users));
    }
  
   }

  getUserInfo(){
    this.userInfo = JSON.parse(window.localStorage.getItem("user"));
    return this.userInfo
  }

  setUserInfo(data){
    this.userInfo = data;
    window.localStorage.setItem("user", JSON.stringify(this.userInfo));
  }

  checkLogin(email, password): boolean {
    this.users = JSON.parse(window.localStorage.getItem("users"));
    const res = this.users.filter((item : any) => item.email === email && item.password === password );
    if (res.length){
      this.setUserInfo(res[0]);
      return true;
    }else{
      return false;
    }
  }

  clearCurrentUser(){
    this.setUserInfo(null);
  }

  registerNewUser(user) {
    this.users.push(user);
    window.localStorage.setItem("users", JSON.stringify(this.users));

  }
  checkDuplicate(user): boolean{
    this.users = JSON.parse(window.localStorage.getItem("users"));
    if(this.users.filter(item => item.email === user.email).length) {
      return false;
    } else {
      return true;
    }
  }

  getAuth() {
    return this.isLogin;
  }

  setAuth(isLogin) {
    this.isLogin = isLogin;
  }
}
