import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Simulated authentication state
  private _isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this._isAuthenticated$.asObservable();

  constructor() {
    // Simulate authentication state change after 2 seconds
    setInterval(() => {
      this._isAuthenticated$.next(!this._isAuthenticated$.getValue());
    }, 1000);
   }
}
