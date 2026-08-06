import { Component } from '@angular/core';
import { Reto01TodoStats } from './ejercicios/reto-01-todo-stats/reto-01-todo-stats';
import { Reto02Carrito } from './ejercicios/reto-02-carrito/reto-02-carrito';
import { Reto03Inputs } from './ejercicios/reto-03-inputs/reto-03-inputs';

@Component({
  selector: 'app-root',
  imports: [Reto01TodoStats, Reto02Carrito, Reto03Inputs],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
