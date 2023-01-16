import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  nombre: any
  apellido: any
  contra: any
  correo: any
  num:any

  ngOnInit(): void {
    localStorage.clear()
  }
  almacenar(){
    localStorage.setItem('nombre',this.nombre)
    localStorage.setItem('apellido',this.apellido)
    localStorage.setItem('contra',this.contra)
    localStorage.setItem('correo',this.correo)
    localStorage.setItem('numero',this.num)
}
ingresar(){
  this.router.navigate(['pr'])
  this.almacenar();
}
no(){
  this.router.navigate(['n'])
}
}