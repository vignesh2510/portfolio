import { NgClass, NgStyle } from '@angular/common';
import { Component, ElementRef, Renderer2, AfterViewInit,HostListener } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgClass,
            NgStyle,
            RouterOutlet,
            RouterLink,
            MatProgressBarModule,],
            
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit{

  private elements: HTMLElement[] = [];

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    this.elements = this.el.nativeElement.querySelectorAll('.animate-element');
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.elements.forEach((element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        this.renderer.addClass(element, 'scrolled');
      } else {
        this.renderer.removeClass(element, 'scrolled');
      }
    });
  }



  two='twoo';
  a="ABOUT";
  aone="LEARN MORE ABOUT ME";
  ai="assets/image/vicky.jpeg";
  ask="Skills";
  x={'color':'#18d26e'};
  asks={'color':'#18d26e'}; 
}
