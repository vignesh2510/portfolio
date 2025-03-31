import { NgClass, NgStyle } from '@angular/common';
import { Component, ElementRef, Renderer2, AfterViewInit,HostListener  } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [RouterLink,
            RouterOutlet,
            NgClass,
            NgStyle],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent implements AfterViewInit{

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
  a="RESUME";
  aone="CHECK MY RESUME";
  x={'color':'#18d26e'};
  rs="Intenship";
  rso="WEB DEVELOPMENT INTERNSHIP";
  rspo="Seyal Infotech, Karur";
  rspt="Completed Web Development Internship at SEYAL INFOTECH, Karur. (July 2022 - Augest 2022)";
  re="Education";
  reo="BACHELOR OF COMPUTER APPLICATION";
  repo="Valluvur college of art and science, Karur";
  rept="I have completed my BCA Degree at Valluvur college of art and science under Bharathidasan University ";
  rt="Training Courses";
  rto="FRONTEND WEB DEVELOPMENT";
  rtpo="Axexa Technology Solution, Banglore";
  rtpt="Completed training course in FRONTEND WEB DEVELOPMENT using ANGULAR at AXEXA TECHNOLOGY SOLUTION private limited, Bangalore";
  rl="Skill Sets";
  rlo="SKILL SET";
  rlot="Frontend Web Development";
}
