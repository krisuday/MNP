import { Component, OnInit } from '@angular/core';
import { Contacts } from 'src/app/contact.model';
import { ContactsService } from 'src/app/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contact.component.html',
  styles: [
  ]
})
export class ContactsComponent implements OnInit {

  constructor(public service: ContactsService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: Contacts) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    this.service.deleteContact(id)
      .subscribe(
        (res: any) => {
          this.service.refreshList();
        },
        (err: any) => { console.log(err) }
      )
  }
} 
