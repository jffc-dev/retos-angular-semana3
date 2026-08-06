import { Component } from '@angular/core';
import { Reto01TodoStats } from './ejercicios/reto-01-todo-stats/reto-01-todo-stats';
import { Reto02Carrito } from './ejercicios/reto-02-carrito/reto-02-carrito';

@Component({
  selector: 'app-root',
  imports: [Reto01TodoStats, Reto02Carrito],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
