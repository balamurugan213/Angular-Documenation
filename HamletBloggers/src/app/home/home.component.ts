import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Event } from '@angular/router';
import { HamletService } from '../hamlet.service';
import { Hamlets } from '../hamlets';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  hamlet: Hamlets[] = [];
  constructor(private hamletService: HamletService) { 
    
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.hamletService.getHamlets()
      .subscribe((hamlet: Hamlets[]) => this.hamlet = hamlet.slice(1, 5));
      console.log(this.hamlet)
  }

}
