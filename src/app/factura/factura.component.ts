import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  constructor() { }

  nombre: any
  apellido:any
  correo:any
  numero:any

  ngOnInit(): void {
    this.factura()
  }
  factura (){
    this.nombre = localStorage.getItem('nombre')
    this.apellido = localStorage.getItem('apellido')
    this.correo = localStorage.getItem('correo')
    this.numero = localStorage.getItem('numero')
      }
}
