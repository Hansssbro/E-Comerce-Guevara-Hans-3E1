import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-olympus',
  templateUrl: './olympus.component.html',
  styleUrls: ['./olympus.component.css']
})
export class OlympusComponent implements OnInit {
  nam: any
  p:any
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

  pagar(){
    this.router.navigate(['f'])
  }

  nm(){
    this.nam=localStorage.setItem('CAMISETA','Producto')
  }
  precio(){
    this.p=localStorage.setItem('$18.50','Precio')
  }
  carr(){
    this.router.navigate(['c'])
  }
}
