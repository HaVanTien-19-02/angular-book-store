import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private selectedProductid = new Subject<string>();
  selectedProductid$ = this.selectedProductid.asObservable();

  constructor() { }

  setSelectedProductid(pid: string): void {
    this.selectedProductid.next(pid);
  }

}
