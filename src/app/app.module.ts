import { HowItWorksService } from './how-it-works.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { CtaButtonComponent } from './cta-button/cta-button.component';
import { HeadlineComponent } from './headline/headline.component';
import { CtaCopyComponent } from './cta-copy/cta-copy.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    FooterComponent,
    CtaButtonComponent,
    HeadlineComponent,
    CtaCopyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HowItWorksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
