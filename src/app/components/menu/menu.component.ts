import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public isCollapsed: boolean;
  private menuList = [{ isSelected: true , menuName: "Search Repository", path: ['/dashboard/task-boards'], icon: "github" },
    { menuName: "PersonalInfo", path: ['/dashboard/personal-info'], icon: "user", isSelected: false}];
  private sList = [{ menuName: "Log Out", path: ['/login'], icon: "logout" }];

  constructor() { }

  ngOnInit() {
  }



}
