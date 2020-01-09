import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { UppercaseDisaplayPipe } from './pipes/uppercase-disaplay.pipe';
import { TaskBoardsComponent } from './components/task-boards/task-boards.component';
import { OneBoardComponent } from './components/one-board/one-board.component';


registerLocaleData(en);

@NgModule({
  //注册组件，挂载
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    PersonalInfoComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    UppercaseDisaplayPipe,
    TaskBoardsComponent,
    OneBoardComponent
  ],
  //注册模块
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
