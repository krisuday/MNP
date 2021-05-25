import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contact/contact.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';

const routes: Routes = [
  { path: 'contact', component: ContactsComponent },
  { path: '', redirectTo: '/contact', pathMatch: 'full' }, // redirect to contact
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
