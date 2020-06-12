import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pag:number;

  images = [1,2].map((n) => `assets/img/banner${n}.png`);
  constructor(public _homeService: HomeService) {

  }

  ngOnInit(): void {
    this._homeService.pageNumber
            .subscribe(
              (pageNumber) => {
                this.pag = pageNumber;
              }
            )
  }

}
