import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { AppUser } from 'src/app/models/app-user';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appUser: AppUser;

  constructor(public auth: AuthService) {
    auth.appUser$.subscribe(appUser => {
      this.appUser = appUser;
    });
  }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
  }
}
