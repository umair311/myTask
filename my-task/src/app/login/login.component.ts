import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    function disableF5(e) {
      if ((e.which || e.keyCode) == 116) e.preventDefault(); 
   };
  }

}
