import { Component, OnInit, Input} from '@angular/core';
import { UserInfoService } from 'src/app/services/user-info.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

  
})
export class HeaderComponent implements OnInit {
// 父传子
  @Input() public dashboard: any;
  private isCollapsed : boolean;
  private currentUser: any;
  private userService: UserInfoService;

  constructor(userService: UserInfoService) {
this.userService = userService;
this.currentUser = this.userService.getUserInfo();
   }

  ngOnInit() {
  }

  changeCollapse(){
    this.isCollapsed = !this.isCollapsed;
    this.dashboard.changeCollapse();
  }



}