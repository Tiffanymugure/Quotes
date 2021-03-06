import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quotes/quotes.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { QuoteFormComponent } from './quotes.form/quotes.form.component';
import { StrikethroughDirective } from './strikethrough.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    QuoteFormComponent,
    StrikethroughDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
