import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gymshark',
  templateUrl: './gymshark.component.html',
  styleUrls: ['./gymshark.component.css']
})
export class GymsharkComponent implements OnInit {

  constructor(private router:Router) {}

  ngOnInit(): void {
  }

  regresarPrincipal(){
    this.router.navigate(['pr'])
  }

  goolp(){
    this.router.navigate(['olp'])
  }
  
  goraw(){
    this.router.navigate(['raw'])
  }
  
  goyg(){
    this.router.navigate(['yg'])
  }

}
