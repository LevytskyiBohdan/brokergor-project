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
import { NgxUiLoaderModule, NgxUiLoaderRouterModule, NgxUiLoaderConfig, POSITION, SPINNER, PB_DIRECTION } from  'ngx-ui-loader';

// ngx-toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


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
import { NewsComponent } from './pages/news/news.component';
import { AdminNewsComponent } from './admin/admin-news/admin-news.component';
import { NewsDetailsComponent } from './pages/news-details/news-details.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: '#791111',
  bgsPosition: POSITION.bottomCenter,
  bgsSize: 40,
  bgsType: SPINNER.rectangleBounce, // background spinner type
  fgsColor: '#791111',
  fgsType: SPINNER.chasingDots, // foreground spinner type
  pbColor: '#791111',
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 5, // progress bar thickness
  blur: 5,
};

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
    AuthenticationComponent,
    NewsComponent,
    AdminNewsComponent,
    NewsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxUiLoaderModule,
    FormsModule,
    NgxPageScrollCoreModule.forRoot({duration: 700, scrollOffset: 45}),
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig), // import NgxUiLoaderModule
    NgxUiLoaderRouterModule,
    AngularFireModule.initializeApp(environment.firebase, 'brokergor'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [PriceService, ThemeService, ContactService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
