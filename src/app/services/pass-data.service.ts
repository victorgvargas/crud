import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassDataService {
  emitter : Subject<number> = new Subject<number>();

  constructor() { }

}
