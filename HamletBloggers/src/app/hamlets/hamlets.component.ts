import { Component, OnInit } from '@angular/core';
import { HamletService } from '../hamlet.service';
import { Hamlets } from '../hamlets';
import { MessagesService } from '../messages.service';
// import { Hams } from "../static/mock-hamlets";


@Component({
  selector: 'app-hamlets',
  templateUrl: './hamlets.component.html',
  styleUrls: ['./hamlets.component.scss']
})
export class HamletsComponent implements OnInit {

  hamlets: Hamlets[] | undefined;

  selectedHamlet: Hamlets | undefined;
  
  
  constructor(private hamletService: HamletService,private messageService: MessagesService) {}
  
  ngOnInit(): void {
    this.getHamlet();
  }

  getHamlet(): void {
    this.hamletService.getHamlets()
    .subscribe(hamlets =>this.hamlets=hamlets);
  }

  onSelect(ham: Hamlets): void {
    this.selectedHamlet=ham;
    this.messageService.add(`HeroesComponent: Selected hero id=${ham.id}`);
  }


}
