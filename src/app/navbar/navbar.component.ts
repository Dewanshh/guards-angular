import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  role="admbin";
  constructor(private router:Router){}

  onContact(){
    this.router.navigate(['contact']);
  }
  onHome(){
    this.router.navigate(['']);
  }
  onOffers(){
    this.router.navigate(['offers']);
  }
  onAbout(){
    this.router.navigate(['about']);
  }
  onAdmin(){

      this.router.navigate(['admin']);
  }
}
