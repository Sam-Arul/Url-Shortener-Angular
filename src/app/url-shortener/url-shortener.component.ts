import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms'
import { UrlService } from '../url.service';

@Component({
  selector: 'app-url-shortener',
  templateUrl: './url-shortener.component.html',
  styleUrls: ['./url-shortener.component.css']
})
export class UrlShortenerComponent implements OnInit {
urlForm;
  constructor(private urlService: UrlService) {
    this.urlForm = new FormGroup({
      longUrl : new FormControl('',Validators.required),
    })
   }

  ngOnInit(): void {
  }
sendUrl(){
  if(this.urlForm.valid){

    this.urlService.postUrl(this.urlForm.value).subscribe((data)=>{
      alert("msg send");
      
    })
  }
}
}
