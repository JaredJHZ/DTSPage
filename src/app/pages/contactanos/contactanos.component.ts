import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {

  contacto = new FormGroup(
    {
      "nombre": new FormControl('', Validators.required),
      "email": new FormControl('', Validators.required),
      "descripcion": new FormControl('',Validators.required)
    }
  );

  constructor() { }

  ngOnInit(): void {
  }

}
