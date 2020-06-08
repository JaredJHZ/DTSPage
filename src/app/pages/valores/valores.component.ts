import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-valores',
  templateUrl: './valores.component.html',
  styleUrls: ['./valores.component.css']
})
export class ValoresComponent implements OnInit {

  valores: object [] = [
    {
      "name": "Innovacion",
      "desc": "Somos una empresa enfocado en la innovacion",
      "img":"https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      "name": "Excelencia",
      "desc": "Somos una empresa que se basa en la excelencia",
      "img": "https://images.pexels.com/photos/327533/pexels-photo-327533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      "name": "Pasion",
      "desc":"Trabajamos con pasion",
      "img":"https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      "name": "Etica",
      "desc":"Somos una empresa que trabaja con etica",
      "img":"https://images.pexels.com/photos/340152/pexels-photo-340152.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
  ]
  

  constructor(public _homeService:HomeService) { }

  ngOnInit(): void {
  }

}
