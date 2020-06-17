import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import {email} from '../../interfaces/email';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/components/modal/modal.component';
@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {

  public loading: boolean = false;

  contacto = new FormGroup(
    {
      "nombre": new FormControl('', Validators.required),
      "telefono": new FormControl('', Validators.required),
      "descripcion": new FormControl('',Validators.required)
    }
  );

  constructor(public _emailService: EmailService, public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  openDialog(message: string): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      panelClass: 'custom-modal',
      data: {
        message
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.contacto.reset();
    });
  }


  verMasHandler(message:string): void {
    this.openDialog(message);
  }

  public sendEmail(): void{
      let email: email = {
        phone: this.contacto.controls['telefono'].value,
        name: this.contacto.controls['nombre'].value,
        desc: this.contacto.controls['descripcion'].value
      }
      this.loading = true;
      this._emailService.sendEmail(email)
                        .subscribe(
                          (value) => {
                            this.verMasHandler(value['message'])
                            this.loading = false;
                          }
                        )
  }

}
