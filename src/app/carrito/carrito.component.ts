import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor() { }
  nam: any 
  p: any
  ngOnInit(): void {
  }
  nm(){
    this.nam=localStorage.getItem('Producto')
  }
  precio(){
    this.p=localStorage.getItem('Precio')
  }
}
