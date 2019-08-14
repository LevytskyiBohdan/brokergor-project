import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

// Scroll to mode
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

// NGXuiLoader
import { NgxUiLoaderModule, NgxUiLoaderRouterModule } from  'ngx-ui-loader';

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
import { AdminPriceComponent } from './admin/admin-price/admin-price.component';
import { AdminContactsComponent } from './admin/admin-contacts/admin-contacts.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { PassengerCarComponent } from './pages/calculator/passenger-car/passenger-car.component';
import { CargoCarComponent } from './pages/calculator/cargo-car/cargo-car.component';
import { MotorcycleComponent } from './pages/calculator/motorcycle/motorcycle.component';
import { BusesComponent } from './pages/calculator/buses/buses.component';
import { AdminSliderComponent } from './admin/admin-slider/admin-slider.component';
import { PriceService } from './shared/services/price.service';
import { BtnBackComponent } from './components/btn-back/btn-back.component';
import { ThemeService } from './shared/services/theme.service';
import { ContactService } from './shared/services/contact.service';
import { AuthenticationService } from './shared/services/authentication.service';
import { AuthenticationComponent } from './components/authentication/authentication.component';

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
    AdminPriceComponent,
    AdminContactsComponent,
    CalculatorComponent,
    PassengerCarComponent,
    CargoCarComponent,
    MotorcycleComponent,
    BusesComponent,
    AdminSliderComponent,
    BtnBackComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxUiLoaderModule,
    FormsModule,
    NgxPageScrollCoreModule.forRoot({duration: 700, scrollOffset: 20}),
    NgxUiLoaderModule, // import NgxUiLoaderModule
    NgxUiLoaderRouterModule,
    AngularFireModule.initializeApp(environment.firebase, 'brokergor'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [PriceService, ThemeService, ContactService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
