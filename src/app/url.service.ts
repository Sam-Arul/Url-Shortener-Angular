import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private http:HttpClient) { }

  postUrl(data):Observable<any>{
    return this.http.post("https://sam-url-shortener.herokuapp.com/",data)
  }
  geturl():Observable<any>{
    return this.http.get("https://sam-url-shortener.herokuapp.com/url")
  }
}
