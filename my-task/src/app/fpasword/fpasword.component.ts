import { Component, OnInit } from '@angular/core';
import { ProtractorExpectedConditions } from 'protractor';

@Component({
  selector: 'app-fpasword',
  templateUrl: './fpasword.component.html',
  styleUrls: ['./fpasword.component.css']
})
export class FpaswordComponent implements OnInit {

  constructor() { }
public show:boolean
  ngOnInit() {
this.show=true;

function disableF5(e) {
  if ((e.which || e.keyCode) == 116) e.preventDefault(); 
};



  }
  proceed()
  {
  this.show=false 
  console.log(this.show);
  
  }

}
