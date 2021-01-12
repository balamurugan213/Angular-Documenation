import { Injectable } from '@angular/core';
import { Hamlets } from './hamlets';
import { Hams } from './static/mock-hamlets';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HamletService {

  constructor(private messageService: MessagesService) { }

  getHamlets(): Observable<Hamlets[]> {
    this.messageService.add('HametService: fetched heroes');
    return of (Hams);
  }

  
}
