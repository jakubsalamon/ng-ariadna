import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  textFromService = 'justyn kalamaja';

  exposeText() {
    return this.textFromService;
  }
}
