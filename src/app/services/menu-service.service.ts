import { Injectable } from '@angular/core';

import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  public data = {
    "menu": [
        {
        "name":"Nosotros",
        "route":""
        },
        {
            "name":"Soluciones",
            "route":"soluciones"
        },
        {
            "name":"Contactanos",
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
