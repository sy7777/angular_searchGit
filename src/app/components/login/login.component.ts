import { Component, OnInit } from '@angular/core';

import { HttpserviceService } from '../../services/httpservice.service';
import { UserInfoService } from '../../services/user-info.service';

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

  constructor(h: HttpserviceService,  userService: UserInfoService) {
    this.http = h;
    this.userService = userService;
  }

  ngOnInit() {
  }
  login() {
    this.http.login(this.username, this.password).subscribe((data:any) => {
      const user = data.data.UserInfo;
      console.log(user)
      user.token = data.data.Token;
      this.userService.setUserInfo(user);
    });
  }
  changename() {
    this.username = "biu";

  }

}
