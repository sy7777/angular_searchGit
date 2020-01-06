import { Injectable } from '@angular/core';
// service可以传输HTTPS请求，也可以存储一些数据放在localstorage
@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  private userInfo: any;

  constructor() { }

  getUserInfo(){
    this.userInfo = JSON.parse(window.localStorage.getItem("user"));
    return this.userInfo
  }

  setUserInfo(data){
    this.userInfo = data;
    window.localStorage.setItem("user", JSON.stringify(this.userInfo));
  }
}
