import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../../services/httpservice.service';
import { UserInfoService } from '../../services/user-info.service';
import { Router } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';
import { debounce } from 'lodash';
import { NzMessageService } from 'ng-zorro-antd';
@Component({
  selector: 'app-task-boards',
  templateUrl: './task-boards.component.html',
  styleUrls: ['./task-boards.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TaskBoardsComponent implements OnInit {

  private http: HttpserviceService;
  private taskBoard: any;
  private userService: UserInfoService;
  private token: string;
  private filteredOptions = [];
  private inputValue: string;
  private repos = [];
  private loading: boolean;

  constructor(http: HttpserviceService, userService: UserInfoService, private router: Router, private message: NzMessageService) {

    this.http = http;

    this.userService = userService;

  }

  ngOnInit() {

    // this.token = this.userService.getUserInfo().token;

    // this.http.getTaskBoards(this.token).subscribe((data: any) => {
    //   this.taskBoard = data.data;
    // });
  }

  ngAfterViewInit(): void {


  }

  showBoard() {
    console.log(this.taskBoard);
  }
  goOneBoard(boardId) {
    this.router.navigate(["/task-board", boardId]);
  }



  // 具有防抖功能的函数, 延迟5s
  public onChange = debounce(() => {
    if (this.inputValue !== "") {
      this.http.fetchRepos(this.inputValue).subscribe((data: any) => {
        this.filteredOptions = data.items.map(repo => repo.name);
      });
    }  
  }, 500);

  // 根据输入查找repo
  public searchRepo = debounce(() => {
    if (this.inputValue && this.inputValue !== "") {
      this.loading = true;
      this.http.fetchRepos(this.inputValue).subscribe((data: any) => {
        this.repos = data.items;
        this.loading = false;
        this.inputValue = "";
        console.log(this.repos)
      });
    } else {
      this.message.create("warning", "Please input repository name!");
    }
  }, 800);




}
