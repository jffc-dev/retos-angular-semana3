import { Component } from '@angular/core';
import { Reto01TodoStats } from './ejercicios/reto-01-todo-stats/reto-01-todo-stats';
import { Reto02Carrito } from './ejercicios/reto-02-carrito/reto-02-carrito';
import { Reto03Inputs } from './ejercicios/reto-03-inputs/reto-03-inputs';
import { Reto04Semaforo } from './ejercicios/reto-04-semaforo/reto-04-semaforo';
import { Reto05PasswordStrength } from './ejercicios/reto-05-password-strength/reto-05-password-strength';
import { Reto06Autofocus } from './ejercicios/reto-06-autofocus/reto-06-autofocus';
import { Reto07MediaPlayer } from './ejercicios/reto-07-media-player/reto-07-media-player';

@Component({
  selector: 'app-root',
  imports: [
    Reto01TodoStats,
    Reto02Carrito,
    Reto03Inputs,
    Reto04Semaforo,
    Reto05PasswordStrength,
    Reto06Autofocus,
    Reto07MediaPlayer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
