import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-raw',
  templateUrl: './raw.component.html',
  styleUrls: ['./raw.component.css']
})
export class RawComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  regresarPrincipal(){
    this.router.navigate(['pr'])
  }

  googs(){
    this.router.navigate(['gs'])
  }
  
  gorolp(){
    this.router.navigate(['olp'])
  }
  
  goyg(){
    this.router.navigate(['yg'])
  }


}
