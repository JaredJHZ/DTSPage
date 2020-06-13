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
      "description": [
        `Nuestro servicio de E-commerce está basado en las mejores prácticas de desarrollo como lo son pruebas de implementación, planificación y programación del sistemas.`
      ],
      "services": [
        'Soporte, dudas o inquietudes sobre su plataforma de comercio electrónico Digital. ',
        'Respaldo de sus bases de datos. ',
        'Actualización de contenido y catálogos de servicios. '
      ]
    },
    {
      "name": "Aplicaciones Móviles",
      "image": "assets/img/appmovil.png",
      "description": [
        `Desarrollo de aplicaciones en IOS: `,
        `Contamos con la experiencia de desarrollar aplicaciones nativas  IOS para toda la gama de dispositivos móviles de Apple. `,
        `Desarrollo de aplicaciones Android: `,
        `Desarrollamos aplicaciones a la medida explotando todas las funcionalidades que ofrece el sistema operativo Android. Utilizando siempre la versión más reciente y los paquetes API.  `
      ]
    },
    {
      "name": "Desarrollos de software",
      "image": "assets/img/software.png",
      "description": [
        "Desarrollo de software a la medida, modernizarémos su empresa utilizando la más novedosas tecnologías.",
        "Utilizamos metodologías ágiles para el desarrollo de software como lo son SCRUM , por lo que tendrá releases continuos de sus aplicaciones.",
        "Enfocados en user experience, utilizamos los frameworks más modernos de desarrollo frontend como lo son Angular y React.",
        "Mantenga sus aplicaciones seguras y modernas, ya que desarrollamos en los mejores frameworks de backend cómo lo son Spring, Django y Express",
        "Desarrollo pensando en la seguridad de sus datos, podemos usar diversos tipos de encriptaciones como SHA256 entre otros. Así como usar distintos SGBD cómo PostgreSQL, MariaDB, Microsoft Server y no relacionales cómo MongoDB o DynamoDB",
        "Unáse a la revolución serverless, aproveche las ventajas que le ofrece la nube, podemos crear su sitio web utilizando tecnología serverless. Diga adiós a los servidores!"
      ],
      "services": [
        `Desarrollos web a la medida`,
        `ERP Web`,
        `APIS REST`
      ]
    },
    {
      "name": "Cloud Computing",
      "image": "assets/img/aws.png",
      "description": [
        `Asesoramos y les brindamos las mejores alternativas a nuestros clientes para iniciar, adoptar e implementar soluciones y servicios avanzados en la gestión de plataformas Cloud y entornos híbridos, combinando la optimización los recursos ya existentes con los más innovadores recursos de la nube pública. `,
        `Garantizando en todo momento la continuidad del negocio y facilitando el desarrollo nativo de aplicaciones en la nube con las ventajas de flexibilidad, escalabilidad y alta disponibilidad de los negocios exponenciales. `,
        `Nuestro portafolio de soluciones de Cloud Computing está desarrollado con tecnología de Amazon Web Services y se  incluyen los servicios de: `
      ],
      "services": [
        `DevOps`,
        `Contenedores`,
        `Serverless`,
        `Bases de Datos`,
        `Servicios de migración`,
        `Infraestructura`,
        `Almacenamiento`
      ]
    }
  ]

 q
  constructor(public dialog: MatDialog) { }


  openDialog(name:string ,description: string, services: string): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '80%',
      data: {
        name,
        description,
        services
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  verMasHandler(name:string , description: string, services:string): void {
    this.openDialog(name , description, services);
  }

  ngOnInit(): void {
  }

}
