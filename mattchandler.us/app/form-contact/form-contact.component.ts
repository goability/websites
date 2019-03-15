import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { ContactMessage } from '../contact-message';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.less']
})

export class FormContactComponent implements OnInit {

  constructor( private http: HttpClient ) { }

  ngOnInit() { }

  dataModel = new ContactMessage('', '', '', '');
  submitted = false;
  successMessage = '';
  messageHeaders =  {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  sendMessageURL: string = 'http://mattchandler.us/_internalServices/sendMessage.php';

  onSubmit() {
    this.submitted = true;
    //alert(this.sendMessageURL);
    this.http.post(this.sendMessageURL, this.dataModel, this.messageHeaders).subscribe(
        (val) => {
            console.log("POST RETURNED SUCCESS",
                        val);
            this.successMessage = 'Thank you.  Message received';

        },
        error => {

            console.log("POST RETURNED ERROR: ", error.message);
            this.successMessage = 'Error encountered: ' + error.message;
        },
        () => {
            console.log("POST COMPLETED");
            window.setTimeout(function(){
              window.location.replace("http://mattchandler.us");
            },2000);

        });

  }

  get diagnostic() { return JSON.stringify(this.dataModel); }

}
