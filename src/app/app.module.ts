import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { LandingComponentComponent } from './landing-component/landing-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    LandingComponentComponent,
    FooterComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
