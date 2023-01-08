import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-youngla',
  templateUrl: './youngla.component.html',
  styleUrls: ['./youngla.component.css']
})
export class YounglaComponent implements OnInit {

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
  
  goolp(){
    this.router.navigate(['olp'])
  }


}
