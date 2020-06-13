import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  images = [1,2].map((n) => `assets/img/${n}.png`);
  constructor(public _homeService: HomeService) {

  }

  ngOnInit(): void {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
}

}
