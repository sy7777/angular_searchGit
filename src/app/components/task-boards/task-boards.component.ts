import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../../services/httpservice.service';
import { UserInfoService } from '../../services/user-info.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-task-boards',
  templateUrl: './task-boards.component.html',
  styleUrls: ['./task-boards.component.css']
})
export class TaskBoardsComponent implements OnInit {

  private http: HttpserviceService;
  private taskBoard: any;
  private userService: UserInfoService;
  private token: string;

  constructor(http: HttpserviceService, userService: UserInfoService, private router:Router) {

    this.http = http;

    this.userService = userService;

  }

  ngOnInit() {

    this.token = this.userService.getUserInfo().token;

    this.http.getTaskBoards(this.token).subscribe((data: any) => {
      this.taskBoard = data.data;
    });
  }

  ngAfterViewInit(): void {


  }

  showBoard() {
    console.log(this.taskBoard);
  }
  goOneBoard(boardId){
    this.router.navigate(["/task-board", boardId]);
  }

}
