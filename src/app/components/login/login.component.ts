import { Component, OnInit } from '@angular/core';

import { HttpserviceService } from '../../services/httpservice.service';
import { UserInfoService } from '../../services/user-info.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private username: string;
  private password;
  private http: HttpserviceService;
  private userService: UserInfoService;

  constructor(h: HttpserviceService,  userService: UserInfoService, private router: Router, 
    private message: NzMessageService) {
    this.http = h;
    this.userService = userService;
  }

  ngOnInit() {
  }

  login(){
    if (this.username && this.password){
      if (this.username == "admin" && this.password == 1234) {
        this.router.navigateByUrl("/dashboard/task-boards");
        this.message.create("success", `Log in successfully`);
      }else{
        this.message.create("error", `Wrong username or password`);
      }
    }else{
      this.message.create("error", `Please enter your username and password`);
    }
    
  }
  // login() {
  //   this.http.login(this.username, this.password).subscribe((data:any) => {
  //     const user = data.data.UserInfo;
  //     console.log(user)
  //     user.token = data.data.Token;
  //     this.userService.setUserInfo(user);
  //   });
  // }
  // changename() {
  //   this.username = "biu";

  // }

}
