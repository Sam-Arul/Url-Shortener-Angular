import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms'
import { UrlService } from '../url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-url-shortener',
  templateUrl: './url-shortener.component.html',
  styleUrls: ['./url-shortener.component.css']
})
export class UrlShortenerComponent implements OnInit {
urlForm;
  constructor(private urlService: UrlService, private router: Router) {
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
      this.router.navigate(["list"])
    })
  }
}
}
