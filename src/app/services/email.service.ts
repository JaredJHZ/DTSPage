import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { email } from '../interfaces/email';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private url:string = 'https://r39nutasjc.execute-api.us-east-1.amazonaws.com/latest';

  constructor(public httpClient: HttpClient) { }

  public sendEmail(email: email) : Observable<any> {
    return this.httpClient.post(this.url + "/sendEmail", email);
  }

}
