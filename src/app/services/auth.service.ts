import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL_SERVER = "https://librarypca.fly.dev/";
  HTTP_HEADERS = {headers: new HttpHeaders({"Content-Type": "application/json"})};

  constructor(private http: HttpClient) {
  }

  login(user: any) {
    return new Promise((accept, reject) => {
      this.http.post(`${this.URL_SERVER}login`, {"user": user},
        this.HTTP_HEADERS).subscribe((data: any) => {
          console.log('data {}', data)
          if (data.status == "OK") {
            accept(data);
          } else {
            reject(data.errors)
          }
      }, error => {
          reject(error);
      })
    });
  }

  register(user : any){
    return new Promise((accept, reject) => {
      this.http.post(`${this.URL_SERVER}signup`, {"user": user},
        this.HTTP_HEADERS).subscribe((data: any) => {
        console.log("data {}", data)
        if (data.status == "OK"){
          accept(data.msg);
        }else{
          reject(data.error)
        }
      }, error => {
        reject(error);
      })
    });
  }


}
