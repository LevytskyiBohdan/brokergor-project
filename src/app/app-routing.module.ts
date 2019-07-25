import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { PriceComponent } from './pages/price/price.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { CarComponent } from './pages/car/car.component';
import { ExportComponent } from './pages/export/export.component';
import { ImportComponent } from './pages/import/import.component';
import { Eur1Component } from './pages/eur1/eur1.component';
import { AdminComponent } from './admin/admin.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { AdminCommentsComponent } from './admin/admin-comments/admin-comments.component';
import { AdminPriceComponent } from './admin/admin-price/admin-price.component';
import { AdminContactsComponent } from './admin/admin-contacts/admin-contacts.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'price', component: PriceComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'car', component: CarComponent},
  {path: 'export', component: ExportComponent},
  {path: 'import', component: ImportComponent},
  {path: 'eur1', component: Eur1Component},
  {path: 'comments', component: CommentsComponent},
  {path: 'admin', component: AdminComponent, children: [
    {path: '', redirectTo: 'comments', pathMatch: 'full'},
    {path: 'comments', component: AdminCommentsComponent},
    {path: 'price', component: AdminPriceComponent},
    {path: 'contacts', component: AdminContactsComponent},
  ]},
  {path: '**', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
