import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contacts } from 'src/app/contact.model';
import { ContactsService } from 'src/app/contact.service';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styles: [
  ]
})
export class ContactFormComponent implements OnInit {
  constructor(public service: ContactsService) {
  }
  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    if (this.service.formData.id == 0) //we will use the id as identifier for updating or insertion
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }
  insertRecord(form: NgForm) {
    this.service.postContact().subscribe(
      (res: any) => {
        this.resetForm(form);
        this.service.refreshList();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  updateRecord(form: NgForm) {
    this.service.putContact().subscribe(
      (res: any) => {
        this.resetForm(form);
        this.service.refreshList();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Contacts();
  }
}
