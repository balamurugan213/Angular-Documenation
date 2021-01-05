import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Event } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  home: String="this is home";
  val: number=6;
  book:string="cb";
  
  @Input() student: any;
  @Output() onc=new EventEmitter();





  fone:{name:string,state:string}={name:"chennai",state:"india"};

  events(e:any){
    this.onc.emit(this.fone.name)
  }
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
