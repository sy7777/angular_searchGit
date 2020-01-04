import { ViewChild, Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private isCollapsed: boolean;

  // 获取子组件对象，子传父
  @ViewChild("menu", { static: false }) private menu: any;
//生命周期函数
  constructor() { 
    console.log("dashboard constructor")
  }

  ngOnInit() {
    console.log("dashboard init")
  }

  ngAfterViewInit(){
    console.log("dashboard view init")
  }

  changeCollapse(){
    this.isCollapsed = !this.isCollapsed;
    this.menu.isCollapsed = this.isCollapsed;
  }

}
