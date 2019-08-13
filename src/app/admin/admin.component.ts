import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private AuthenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  logOut(): void{
    this.AuthenticationService.singOut();
    console.log('logOut');
    
  }
}
