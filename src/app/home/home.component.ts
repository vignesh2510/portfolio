import { NgClass, NgIf } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgClass,RouterLink,NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  loading: boolean = true; // Initially set to true
  private static hasLoaded: boolean = false; // Static variable to track loading state

  ngOnInit() {
    // Check if loading has already occurred
    if (!HomeComponent.hasLoaded) {
      // Show preloader for 3 seconds
      setTimeout(() => {
        this.loading = false; // Hide the preloader
        HomeComponent.hasLoaded = true; // Indicate that loading has occurred
      }, 3000);
    } else {
      this.loading = false; // If already loaded, skip the loading
    }
  }

  one="assets/video/pexels-mart-production-7565445 (540p).mp4";
  
  onee='myvideo'

  onh="I'm Vigneshwaran";
  onp="Front End Developer";

}
