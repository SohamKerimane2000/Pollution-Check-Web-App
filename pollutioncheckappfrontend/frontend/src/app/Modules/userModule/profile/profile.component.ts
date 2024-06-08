import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDetails } from 'src/app/Model/user-details';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { WishlistService } from 'src/app/service/wishlist.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userDetails: UserDetails | any;

  constructor(private service: WishlistService, private authService: AuthenticationService, private router: Router) {
    const observer = {
      next: (result: UserDetails) => {
        this.userDetails = result;
      },
      error: (error: Error) => {
        console.log("error is " + error.message);
      },
      complete: () => {
        console.log("completed");
      }
    }

    const observable: Observable<UserDetails> = service.getProfileDetails(this.authService.getUsername());
    observable.subscribe(observer);
    console.log(this.userDetails);
  }


  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }
}
