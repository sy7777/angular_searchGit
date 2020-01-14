import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// 测试pus
@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  private httpService: HttpClient;

  constructor(httpService: HttpClient) {
    this.httpService = httpService;
  }
  // json字符串是由HTTPCLIENT转化，对比XML简洁。可读性高
  login(userName, password) {
    return this.httpService.post("http://192.168.0.8:8888/api/users/login", { email: userName, password: password });
  }

  getUserInfo(uuid, token) {
    return this.httpService.get(`http://192.168.0.8:8888/api/users/get_user/${uuid}`, {
      headers: new HttpHeaders({
        "token": token

      })
    })
  }

  getTaskBoard(id, token) {
    return new Promise((res, rej) => {
      this.httpService.get(`http://192.168.0.8:8888/api/kan-ban/get_task_board/${id}`, {
        headers: new HttpHeaders({
          "token": token

        })
      }).subscribe(data => {
        res(data);
      });
    });
  }


  getTaskBoards(token) {
    return this.httpService.get(`http://192.168.0.8:8888/api/kan-ban/get_task_boards`, {
      headers: new HttpHeaders({
        "token": token

      })
    })
  }

  fetchRepos(repoName) {
    return this.httpService.get(`https://api.github.com/search/repositories?q=${repoName}&client_id=undefined&client_secret=undefined&sort=stars&order=desc`);
  }
}


