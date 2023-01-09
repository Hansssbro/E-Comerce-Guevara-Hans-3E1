import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private router: Router) { }

  nombre: any
  apellido:any
  correo:any
  numero:any

  ngOnInit(): void {
    this.bvv
  }

    bvv(){
      this.nombre = localStorage.getItem('nombre')
      this.apellido = localStorage.getItem('apellido')
      this.correo = localStorage.getItem('correo')
      this.numero = localStorage.getItem('numero')
    }
  goolp(){
    this.router.navigate(['olp'])
  }

  gogs(){
    this.router.navigate(['gs'])
  }
  
  goraw(){
    this.router.navigate(['raw'])
  }
  
  goyg(){
    this.router.navigate(['yg'])
  }

  
}
