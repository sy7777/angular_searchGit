import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpserviceService } from '../../services/httpservice.service';
import { UserInfoService } from '../../services/user-info.service';

@Component({
  selector: 'app-one-board',
  templateUrl: './one-board.component.html',
  styleUrls: ['./one-board.component.css']
})
export class OneBoardComponent implements OnInit {

  private id: any;
  private board = {
    boardName: "",
    boardDescription: ""
  };
  private token: string;

  constructor(private router: ActivatedRoute,
    private http: HttpserviceService, private userService: UserInfoService) { }

  async ngOnInit() {
    await this.getId();
    this.token = this.userService.getUserInfo().token;
    const res: any = await this.http.getTaskBoard(this.id, this.token);
    this.board = res.data;
    console.log(this.board)
  }

  getId() {
    return new Promise((res, rej) => {
      this.router.params.subscribe(async (data: any) => {
        this.id = data.id;
        res();
      });
    });
  }

}
