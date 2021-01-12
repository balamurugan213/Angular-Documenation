import { Component, Input, OnInit } from '@angular/core';
import { Hamlets } from "../hamlets";

@Component({
  selector: 'app-hamlet-detail',
  templateUrl: './hamlet-detail.component.html',
  styleUrls: ['./hamlet-detail.component.scss']
})
export class HamletDetailComponent implements OnInit {

  @Input() hamlet: Hamlets | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
