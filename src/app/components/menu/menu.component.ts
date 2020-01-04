import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public isCollapsed: boolean;
  private menuList = [{ menuName: "PersonalInfo", path: ['/personal-info'], icon: "user" },
  { menuName: "Login", path: ['/login'], icon: "video-camera" }];
  constructor() { }

  ngOnInit() {
  }



}
