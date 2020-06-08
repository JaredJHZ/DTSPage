import { Component } from '@angular/core';
import { MenuServiceService } from './services/menu-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dtsPage';
  opened:boolean = false;

  constructor(public _menuService: MenuServiceService, public _router: Router) {
      this._menuService.isOpened.subscribe(
        (isOpen) =>  {
         this.opened = isOpen;
        }
      )
  }
  public goToRoute(route: string) {
    this._router.navigate([route]);
  }
 

}
