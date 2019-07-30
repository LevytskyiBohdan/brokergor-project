import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { PriceComponent } from './pages/price/price.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { CarComponent } from './pages/car/car.component';
import { ExportComponent } from './pages/export/export.component';
import { ImportComponent } from './pages/import/import.component';
import { Eur1Component } from './pages/eur1/eur1.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminCommentsComponent } from './admin/admin-comments/admin-comments.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { AdminPriceComponent } from './admin/admin-price/admin-price.component';
import { AdminContactsComponent } from './admin/admin-contacts/admin-contacts.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { PassengerCarComponent } from './pages/calculator/passenger-car/passenger-car.component';
import { CargoCarComponent } from './pages/calculator/cargo-car/cargo-car.component';
import { MotorcycleComponent } from './pages/calculator/motorcycle/motorcycle.component';
import { BusesComponent } from './pages/calculator/buses/buses.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    PriceComponent,
    ContactsComponent,
    CarComponent,
    ExportComponent,
    ImportComponent,
    Eur1Component,
    AdminCommentsComponent,
    CommentsComponent,
    AdminPriceComponent,
    AdminContactsComponent,
    CalculatorComponent,
    PassengerCarComponent,
    CargoCarComponent,
    MotorcycleComponent,
    BusesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
