import { Component, OnInit } from '@angular/core';
import { Hamlets } from '../hamlets';
import { Hams } from "../static/mock-hamlets";


@Component({
  selector: 'app-hamlets',
  templateUrl: './hamlets.component.html',
  styleUrls: ['./hamlets.component.scss']
})
export class HamletsComponent implements OnInit {

  // hams="balamurugan213"
  ham: Hamlets = {
    id: 1,
    name: 'balamurugan'
  };

  hamlets:Hamlets[]=Hams;

  constructor() { }
  
  ngOnInit(): void {
  }

}
