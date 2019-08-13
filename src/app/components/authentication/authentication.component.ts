import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  email: string;
  password: string;

  constructor(private AuthenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  logIn(form): void{
    // console.log(form.value);
    this.AuthenticationService.singIn(form.value.email, form.value.password);
    
  }
}
