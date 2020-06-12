import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-soluciones',
  templateUrl: './soluciones.component.html',
  styleUrls: ['./soluciones.component.css']
})
export class SolucionesComponent implements OnInit {

  soluciones: any [] = [
    {
      "name":"E-commerce",
      "image": "assets/img/ecommerce.png",
      "description": "Contamos con soluciones de Ecommerce para distintos tipos de giros, ya sea relojes, ropa, calzado, tecnología, contamos con una solución"
    },
    {
      "name": "Aplicaciones Móviles",
      "image": "assets/img/appmovil.png",
      "description": "Aplicaciones móviles creadas desde cero para distintos fines, hechas a partir de Flutter o Ionic para ambos sistemas operativos (iOS, Android)."
    },
    {
      "name": "Desarrollos de software",
      "image": "assets/img/software.png",
      "description": "Desarrollo de software a la medida, utilizando los framworks más importantes en el mercado, Angular, React, Django, Flask, Express y diversos gestores de bases de datos."
    },
    {
      "name": "Cloud Computing",
      "image": "assets/img/aws.png",
      "description":"Arquitecturas de cloud computing basadas en Amazon web services"
    }
  ]


  constructor(public dialog: MatDialog) { }


  openDialog(name:string ,description: string): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '70%',
      data: {
        name,
        description
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  verMasHandler(name:string , description: string): void {
    this.openDialog(name , description);
  }

  ngOnInit(): void {
  }

}
