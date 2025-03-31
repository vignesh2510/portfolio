import { NgClass, NgIf} from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgClass,
            RouterOutlet,
            RouterLink,
            AboutComponent,
            
            ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portflio';
}
