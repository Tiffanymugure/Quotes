
import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
 quotes =[
   new Quote(1,"Happiness quite unshared can scarcely be called happiness'then it has no taste.","Charlotte Bronte","Aira",0,0,new Date(2018,10,17)),
   new Quote(2,"The smarter you get the less you talk.","Curtis James","Ashy Wanjiru",0,0,new Date(2018,10,17)),
   new Quote(2,"If we have no peace,it is because we have forgotten we belong to each other.","Mother Theresa","Hamida",0,0,new Date(2018,10,17)),
       ];

       constructor() { }

       ngOnInit() {
       }
     }  
