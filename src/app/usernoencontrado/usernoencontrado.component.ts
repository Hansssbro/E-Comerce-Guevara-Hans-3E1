import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-usernoencontrado',
  templateUrl: './usernoencontrado.component.html',
  styleUrls: ['./usernoencontrado.component.css']
})
export class UsernoencontradoComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  regresar(){
    this.router.navigate([''])
  }
}
