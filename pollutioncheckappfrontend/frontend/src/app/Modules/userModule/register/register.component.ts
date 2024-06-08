import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { WhiteSpaceValidator } from 'src/app/service/white-space-validator';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userNameCtrl: FormControl;
  passwordCtrl: FormControl;
  emailCtrl: FormControl;
  firstNameCtrl: FormControl;
  lastNameCtrl: FormControl;
  cityCtrl: FormControl;
  stateCtrl: FormControl;
  countryCtrl: FormControl;
  phnNoCtrl: FormControl;

  myform: FormGroup;
  constructor(builder: FormBuilder, private service: AuthenticationService,private router:Router ) {
    this.userNameCtrl = builder.control('');
    this.passwordCtrl = builder.control('');
    this.emailCtrl = builder.control('');
    this.firstNameCtrl = builder.control('');
    this.lastNameCtrl = builder.control('');
    this.cityCtrl = builder.control('');
    this.stateCtrl = builder.control('');
    this.countryCtrl = builder.control('');
    this.phnNoCtrl = builder.control('');


    // Form validation part
    this.myform=new FormGroup({
      username:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      firstName:new FormControl('',Validators.required),
      lastName:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    })

    this.myform = builder.group({
      username: this.userNameCtrl,
      password: this.passwordCtrl,
      email: this.emailCtrl,
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
  //lables for registration part
  register() {
    const userName=this.userNameCtrl.value;
    const password=this.passwordCtrl.value;
    const email=this.emailCtrl.value;
    const firstName=this.firstNameCtrl.value;
    const lastName=this.lastNameCtrl.value;
    const phnNumber=this.phnNoCtrl.value;
    const city=this.cityCtrl.value;
    const state=this.stateCtrl.value;
    const country=this.countryCtrl.value;

    console.log(userName);
    console.log(password);
    console.log(email);
    console.log(phnNumber);
    console.log(lastName);
    console.log(firstName);
    console.log(city);
    console.log(state);
    console.log(country);

    const observer={
      next:(result:any)=>{
        // alert("Successfully registered");
        this.router.navigate(['login']);
      },
      error:(error:Error)=>{
        alert("user account already exists");
        console.log(error.message);
        
        // alert("Couldn't register "+error.message);
      }

    }
    const observable:Observable<any>=this.service.register(userName,password,email,firstName,lastName,phnNumber,city,state,country);
    observable.subscribe(observer);
    
  }


  get email(){

    return this.myform.get('email');
  }


}
