import { NgClass, NgStyle } from '@angular/common';
import { Component, ElementRef, Renderer2, AfterViewInit,HostListener } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink,
            RouterOutlet,
            NgClass,
            NgStyle,],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements AfterViewInit{

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
  a="CONTACT";
  aone="Contact with me";
  x={'color':'#18d26e'};
  one="My Address";
  onep="32/2,Vanjinathan nagar, Thanthonimalai, Karur-639005";
  otp="Social Profiles";
  othh="Email";
  othp="madhavanvignesh5@gmail.com";
  ofo="Call Me";
  ofp="96002 47213";
}
