import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private selectedProductId = new Subject<string>();
  selectedProductId$ = this.selectedProductId.asObservable();

  constructor() { }

  setSelectedProductId(pid: string): void {
    this.selectedProductId.next(pid);
  }

}
