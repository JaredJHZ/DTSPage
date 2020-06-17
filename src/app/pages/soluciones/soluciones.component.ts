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
        `Nuestro servicio de E-commerce está basado en las mejores prácticas de desarrollo como lo son pruebas de implementación, planificación y programación del sistemas.`,
        "Contamos con soluciones de E-Commerce completamente Serverless utilizando la tecnología de AWS"
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
      ],
      "services": [
        "Aplicaciones móviles hibridas con Ioinic",
        `Aplicaciones hechas en Flutter`,
        `Aplicaciones nativas en Android`
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
        "Cuando eliges DTS, vas a trabajar mano a mano con profesionales expertos en servicios Cloud, que te ayudarán a lograr que tu negocio de ensueños resalte con las tecnologías de AWS.",
        "Nuestro equipo provee un alto nivel técnico que te ayudarán a desbloquear valores agregados a tu negocio con la ayuda de las tecnologías de AWS.",
        "Somos Partners de AWS!"
      ],
      "services": [
        "Consultoría",
        "Infraestructura como código",
        "DevOps",
        "Migraciones",
        "Soluciones Serverless",
        "Seguridad"
      ]
    }
  ]

 q
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
