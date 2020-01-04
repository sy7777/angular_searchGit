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
}


