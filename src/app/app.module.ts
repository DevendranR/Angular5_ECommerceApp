import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JsonpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { StorageServiceModule} from 'angular-webstorage-service';
import { NgxSmartModalModule ,NgxSmartModalService} from 'ngx-smart-modal';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProductComponent } from './product/product.component';
import { ServiceComponent } from './fivey-service/service.component';
import { CartComponent } from './cart/cart.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { HomeComponent } from './home/home.component';


import { AgmCoreModule } from '@agm/core';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { ProductHandlerService } from './product-handler.service';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ServiceComponent,
    CartComponent,
    DisclaimerComponent,
    PrivacyComponent,
    HomeComponent,
	TermsOfUseComponent
  ],
  imports: [
    BrowserModule,
	CommonModule,
    AppRoutingModule,
	NgxCarouselModule,
	FormsModule,
	JsonpModule,
	HttpClientModule,
	StorageServiceModule,
	BrowserAnimationsModule,
	NgbModule.forRoot(),
	NgxSmartModalModule,
	AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBd6J4RBu-NlTsSQeUa77O-pjrhr5jKW5U'
    })
  ],
  providers: [NgxSmartModalService, ProductHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
