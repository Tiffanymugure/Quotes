import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { Quotes } from './quotes.form/quotes.form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    Quotes.FormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
