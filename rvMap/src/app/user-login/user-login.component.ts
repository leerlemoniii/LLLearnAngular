import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.sass']
})
export class UserLoginComponent implements OnInit {

  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }

}
