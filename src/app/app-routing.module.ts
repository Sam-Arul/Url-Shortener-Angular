import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { UrlShortenerComponent } from './url-shortener/url-shortener.component';


const routes: Routes = [

  {
    path:"list",
    component : ListComponent
  },
  {
    path:"",
    component : UrlShortenerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
