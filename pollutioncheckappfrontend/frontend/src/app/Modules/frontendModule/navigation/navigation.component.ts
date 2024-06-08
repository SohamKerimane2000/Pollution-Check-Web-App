import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  isLoggedIn: boolean = true;

  ngOnInit(): void {
  }
  
  logout() {
    this.authService.logout();
  }

}
