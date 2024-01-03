import { Component, OnInit, computed, effect, signal } from '@angular/core';
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

  title = 'homepage-challenge';
  url: string = './assets/Moon_fill_light.svg';
  checkbox = signal(true);



  ngOnInit(): void {

  }

  cambiarValor(event: any) {
    if (event === false) {
      this.url = './assets/Moon_fill.svg';
    }
    else {
      this.url = './assets/Moon_fill_light.svg';
    }
  }

}
