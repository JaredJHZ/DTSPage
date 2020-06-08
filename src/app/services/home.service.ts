import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  public pageNumber =  new BehaviorSubject<number>(1);

  data = [
    {
      "name": "Clientes"
    },
    {
      "name": "Soluciones"
    },
    {
      "name": "Contactos"
    }
  ];


  constructor() { }

  public getLabels(): String [] {
    let labels = this.data['menu'].map(value => value['name']);
    return labels;
  }

  public nextPage(): void {
      let valor = this.pageNumber.getValue();
      valor += 1;
      this.pageNumber.next(valor);
  }

  public previousPage(): void {
    let valor = this.pageNumber.getValue();
    valor -= 1;
    this.pageNumber.next(valor);
  }

  public init(): void {
    let valor = 1;
    this.pageNumber.next(valor);
  }


}
