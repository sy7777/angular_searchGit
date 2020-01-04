import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
// 父传子
  @Input() public dashboard: any;
  private isCollapsed : boolean;

  constructor() {

   }

  ngOnInit() {
  }

  changeCollapse(){
    this.isCollapsed = !this.isCollapsed;
    this.dashboard.changeCollapse();
  }

}
