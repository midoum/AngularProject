import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ContacterComponent } from './contacter/contacter.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CvComponent } from './cv/cv.component';
import { MotivationComponent } from './motivation/motivation.component';
import { FooterComponent } from './footer/footer.component';
import { ShowinfoComponent } from './showinfo/showinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    ContacterComponent,
    CvComponent,
    MotivationComponent,
    FooterComponent,
    ShowinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
