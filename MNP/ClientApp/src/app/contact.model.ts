//import { Injectable } from '@angular/core';

//@Injectable({
//  providedIn: 'root'
//})
export class Contacts {
  id: number;
  name: string;
  address: string;
  jobTitle: string;
  phone: string;
  company: string;
  email: string;
  lastContacted!: Date;
  comments: string;
  constructor() {
    this.id = 0;
    this.name = "";
    this.address = "";
    this.jobTitle = "";
    this.phone = "";
    this.company = "";
    this.email = "";
    this.comments = "";
  }
}
