import { Component, OnInit } from '@angular/core';
import { MenuServiceService } from 'src/app/services/menu-service.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {



  constructor(public _menuService: MenuServiceService, public _router: Router) { }

  ngOnInit(): void {
  }

  public toggleSidenav(): void {
    this._menuService.toggleSidenav();
  }

  public goToRoute(route: string) {
    this._router.navigate([route]);
  }

}

