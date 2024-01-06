import { Component, ElementRef, OnInit, ViewChild, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  showNavbar: boolean = true;
  showDark: boolean = false;
  title = 'homepage-challenge';
  url: string = './assets/Moon_fill_light.svg';
  logo: string = './assets/alarado-icon-homepage.svg';
  theme: string = './assets/Sun_fill.svg';
  checkbox = signal(true);
  label_top = '😎 Simple way to communicate';


  ngOnInit(): void {

  }

  cambiarValor(event: any) {
    const body = document.querySelector('html');
    this.showDark = !this.showDark;
    body?.classList.toggle('dark', this.showDark);
    if (event === false) {
      this.url = './assets/Moon_fill.svg';
      this.logo = './assets/alarado-icon-homepage-dark.svg';
      this.theme = './assets/Sun_fill_dark.svg';
    }
    else {
      this.url = './assets/Moon_fill_light.svg';
      this.logo = './assets/alarado-icon-homepage.svg';
      this.theme = './assets/Sun_fill.svg';
    }
  }

  openMenu() {
    this.showNavbar = !this.showNavbar;
  }

}
