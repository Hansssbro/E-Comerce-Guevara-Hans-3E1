import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goolp(){
    this.router.navigate(['olp'])
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
