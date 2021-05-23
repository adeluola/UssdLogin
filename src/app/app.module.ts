import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccountComponent } from './account/account.component';
import { FOAComponent } from './foa/foa.component';
import { TutorialsComponent } from './tutorials/tutorials.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AccountComponent,
    FOAComponent,
   
    TutorialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
