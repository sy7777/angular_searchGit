import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { CanActivate, Router } from '@angular/router';
import { UserInfoService } from 'src/app/services/user-info.service';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService implements CanActivate {


  constructor(private router: Router, private userService: UserInfoService, private message: NzMessageService) { }

  canActivate(): boolean {
    const flag = this.userService.getAuth()
    if(!flag) {
      this.message.create("error", `Please Login!`);
      this.router.navigateByUrl("/login");
    }

    return flag;
  }
}
