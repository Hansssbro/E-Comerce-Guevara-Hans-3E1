import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-olympus',
  templateUrl: './olympus.component.html',
  styleUrls: ['./olympus.component.css']
})
export class OlympusComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  regresarPrincipal(){
    this.router.navigate(['pr'])
  }

  googs(){
    this.router.navigate(['gs'])
  }
  
  goraw(){
    this.router.navigate(['raw'])
  }
  
  goyg(){
    this.router.navigate(['yg'])
  }

}
