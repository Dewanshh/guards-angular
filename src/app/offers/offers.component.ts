import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent {
  constructor(private route:Router){}
  onEdit(){
    console.log("This is the edit button")
    this.route.navigate(['offers/edit'])
  }
}
