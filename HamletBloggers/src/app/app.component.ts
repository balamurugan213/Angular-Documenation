import { Component } from '@angular/core';
import { Event } from '@angular/router';
import { HomeComponent } from './home/home.component';

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
