import { Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';
import { getUrlScheme } from '@angular/compiler';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
urlList;
  constructor(private urlService : UrlService) {

    this.urlService.geturl().subscribe((data)=>{
      this.urlList = data;
    })
   }

  ngOnInit(): void {
  }


  redirectPage(shortUrl){
    console.log(shortUrl)
      this.urlService.redirecturl(shortUrl).subscribe()
  }
}
