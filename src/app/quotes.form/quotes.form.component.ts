import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-root',
  templateUrl: '../app/app.component.html',
  styleUrls: ['../app/app.component.css']
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
