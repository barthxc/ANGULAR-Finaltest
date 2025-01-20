import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiServiceService } from 'src/app/core/services/api-service.service';

interface User {
  name: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apiService: ApiServiceService) {}

  public user = new BehaviorSubject<boolean>(true);

  public getUser(): Observable<boolean> {
    return this.user;
  }

  public setUser(value: boolean): void {
    this.user.next(value);
  }

  //BehaviorsSubject User {nombre,}
  //BehaviorsSubject
  //BehaviorsSubject User
}
