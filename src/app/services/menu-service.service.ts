import { Injectable } from '@angular/core';

import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  private data = {
    "menu": [
        {
            "name":"Soluciones",
            "route":"soluciones"
        },
        {
            "name":"Contactos",
            "route":"contactanos"
        }
    ]
}

  constructor() { }

  public isOpened =  new BehaviorSubject<boolean>(false);

  public getLabels(): any [] {
    return this.data.menu;
  }

  public toggleSidenav(): void {
      let valor = !this.isOpened.getValue();
      this.isOpened.next(valor);
  }


}
