import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quotes'

@Component({
  selector: 'app-quote-form',
  templateUrl: 'quotes.form.component.html',
  styleUrls: ['quotes.form.component.css']
})
export class QuoteFormComponent implements OnInit {
newQuote= new Quote(0,"","","",0,0,new Date());
@Output() addQuote=new EventEmitter<Quote>();
submitQuote(){
this.addQuote.emit(this.newQuote);
this.newQuote= new Quote(0,"","","",0,0,new Date());
}
constructor() { }

ngOnInit() {
}

}
