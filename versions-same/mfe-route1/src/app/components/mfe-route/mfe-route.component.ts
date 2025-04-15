import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from 'mfe-shell/AuthService';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mfe-route',
  imports: [ AsyncPipe ],
  standalone: true,
  templateUrl: './mfe-route.component.html',
  styleUrl: './mfe-route.component.scss'
})
export class MfeRouteComponent {

  isAuthenticated$: Observable<boolean>;

  constructor(private authService: AuthService) {
    this.isAuthenticated$ = this.authService.isAuthenticated$;
    
  }

}
