import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private http:HttpClient) { }

  postUrl(data):Observable<any>{
    return this.http.post("http://localhost:3000",data)
  }
  geturl():Observable<any>{
    return this.http.get("http://localhost:3000/url")
  }
  redirecturl(data):Observable<any>{
    return this.http.get("http://localhost:3000/url/"+data)
  }
}
