import { Component, Directive } from '@angular/core';
import { Event } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { ROUTER_DIRECTIVE  } from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'HamletBloggers';
  student='Bala';

  clic(e:any){
    alert(e)
    console.log(e);
  }
  
}
