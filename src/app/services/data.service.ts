import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Mock sales data, replace this with actual API call if needed
  private salesData: number[] = [100, 150, 120, 200, 180, 250, 300];

  constructor() { }

  getSalesData(): Observable<number[]> {
    return of(this.salesData);
  }
}
