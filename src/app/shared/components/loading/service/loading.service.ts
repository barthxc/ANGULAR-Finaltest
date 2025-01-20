import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  constructor() {}

  public loading = new BehaviorSubject<boolean>(true);

  public getLoadingState(): Observable<boolean> {
    return this.loading;
  }

  public setLoadingState(value: boolean): void {
    this.loading.next(value);
  }
}
