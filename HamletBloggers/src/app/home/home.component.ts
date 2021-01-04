import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  home: String="this is home";
  val: number=6;
  book:string="cb";
  fone:{name:string,state:string}={name:"chennai",state:"india"};
  constructor() { }

  ngOnInit(): void {
  }

}
