import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  constructor(private  authService: AuthService) { }

  ngOnInit() {
  }

}
