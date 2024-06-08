import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  //variables requied for edit profile
  passwordCtrl: FormControl;
  firstNameCtrl: FormControl;
  lastNameCtrl: FormControl;
  cityCtrl: FormControl;
  stateCtrl: FormControl;
  countryCtrl: FormControl;
  phnNoCtrl: FormControl;

  myform: FormGroup;
  constructor(builder: FormBuilder, private service: AuthenticationService,private router:Router ) {
    this.passwordCtrl = builder.control('');
    this.firstNameCtrl = builder.control('');
    this.lastNameCtrl = builder.control('');
    this.cityCtrl = builder.control('');
    this.stateCtrl = builder.control('');
    this.countryCtrl = builder.control('');
    this.phnNoCtrl = builder.control('');

    this.myform = builder.group({
      password: this.passwordCtrl,
      firstName: this.firstNameCtrl,
      lastName: this.lastNameCtrl,
      city: this.cityCtrl,
      state: this.stateCtrl,
      country: this.countryCtrl,
      phnNumber: this.phnNoCtrl,
      
    });
  }

  ngOnInit(): void {
  }

  editProfile() {
    const password=this.passwordCtrl.value;
    const firstName=this.firstNameCtrl.value;
    const lastName=this.lastNameCtrl.value;
    const phnNumber=this.phnNoCtrl.value;
    const city=this.cityCtrl.value;
    const state=this.stateCtrl.value;
    const country=this.countryCtrl.value;

    const observer={
      next:(result:any)=>{
        // alert("Successfully updated"); 
        this.router.navigate(['profile']);
      },
      error:(error:Error)=>{
        alert(error.message);
        console.log(error.message);
        
        // alert("Couldn't register "+error.message);
      }

    }
    const observable:Observable<any>=this.service.editProfile(this.service.getUsername(),password,firstName,lastName,phnNumber,city,state,country);
    observable.subscribe(observer);
  }
  logout() {
    this.service.logout();
  }
}
