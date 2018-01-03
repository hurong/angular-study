import { Component, Input, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  template: `
  <div *ngIf="selectedHero">
  <h2>{{ selectedHero.name }} details!</h2>
  <div><label>id: </label>{{ selectedHero.id }}</div>
  <div>
    <label>name: </label>
    <input [(ngModel)]="selectedHero.name" placeholder="name" />
  </div>
</div>
  `,
})

export class HeroDetailComponent {
  @Input() selectedHero: Hero;
}
