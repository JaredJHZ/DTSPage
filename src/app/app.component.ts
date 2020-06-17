import { Component } from '@angular/core';
import { MenuServiceService } from './services/menu-service.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dtsPage';
  opened:boolean = false;
  public labels;

  constructor(public _menuService: MenuServiceService, public _router: Router) {

      this.labels = this._menuService.getLabels();

      this._menuService.isOpened.subscribe(
        (isOpen) =>  {
         this.opened = isOpen;
        }
      )
  }

  ngOnInit() {
    this._router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }

  public goToRoute(route: string) {
    this._router.navigate([route]);
  }

  public closed() {
    this._menuService.toggleSidenav();
  }

  
 

}
