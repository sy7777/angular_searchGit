import { Injectable } from '@angular/core';

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
