import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TaskBoardsComponent } from './components/task-boards/task-boards.component';
import { OneBoardComponent } from './components/one-board/one-board.component';

// 展示路由组件第一步即可切换组件，需要创建组件，例如personalinfo,定义路由路径和规则，在想展示的文件里面写<router-outlet>
const routes: Routes = [
  {
    path: "dashboard", component: DashboardComponent,
    children: [{
      path: '',
      redirectTo: 'personal-info',
      pathMatch: 'full'
    }, { path: "personal-info", component: PersonalInfoComponent },
    // { path: "login", component: LoginComponent },
    { path: "task-boards", component: TaskBoardsComponent },
    // :id是一个占位符
    { path: "task-board/:id", component: OneBoardComponent }]

  },

  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  //主页也是dashboard
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  //是输入乱码重定向到这页
  { path: "**", redirectTo: "dashboard" }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
