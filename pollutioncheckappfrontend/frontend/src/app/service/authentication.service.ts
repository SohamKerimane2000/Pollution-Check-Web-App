import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseServerUrl } from '../constants';
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(private client: HttpClient) { }
  // Verifing the user is login or not
  isUserLoggedIn(): boolean {
    return this.getToken() != undefined && this.getToken() != null;
  }
  // logout
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }


  getUsername(): any {
    const username = localStorage.getItem("username");
    return username;
  }

  getToken(): any {
    const token = localStorage.getItem('token');
    return token;
  }

  // Login Section
  login(username: string, password: string): Observable<string> {
    const url = baseServerUrl + '/login';
    const requestData = { username, password };
    const observable: Observable<string> = this.client.post(url, requestData, { responseType: "text" });
    return observable;
  }
  // Register Section
  register(username: string, password: string, email: string, firstName: string, lastName: string
    , phnNo: string, city: string, state: string, country: string): Observable<string> {
    const url = baseServerUrl + '/register';
    
    
    const requestData = {
      username,
      password,
      email,
      firstName,
      lastName,
      phnNo,
      city,
      state,
      country
    };
    console.log(requestData);
    
    const observable: Observable<any> = this.client.post(url, requestData);
    return observable;
  }

  // Edit profile Section
  editProfile(username: string,password: string, firstName: string, lastName: string
    , phnNo: string, city: string, state: string, country: string): Observable<string> {
    const url = baseServerUrl + '/users/'+ username;
    
    
    const requestData = {
      password,
      firstName,
      lastName,
      phnNo,
      city,
      state,
      country
    };
    console.log(requestData);
    
    const observable: Observable<any> = this.client.patch(url, requestData);
    return observable;
  }
  
  saveToken(username: string, token: string) {
    localStorage.setItem('username', username);
    localStorage.setItem('token', token);
  }
}
