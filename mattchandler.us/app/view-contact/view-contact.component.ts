import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormContactComponent } from '../form-contact/form-contact.component';


@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.less']
})
export class ViewContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
