import { NgStyle } from '@angular/common';
import { Component, computed, ElementRef, signal, viewChild } from '@angular/core';

@Component({
  selector: 'app-reto-07-media-player',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './reto-07-media-player.html',
})
export class Reto07MediaPlayer {
  // TODO: agrega videoRef = viewChild<ElementRef<HTMLVideoElement>>('videoRef')
  // y úsalo en reproducir() (.play()), pausar() (.pause()) y reiniciar()
  // (.currentTime = 0 y .play()). En el template, quita el atributo
  // "controls" del <video>, importa NgStyle para el ancho de la barra de
  // progreso con progreso(), y NgClass para resaltar el botón Play/Pause
  // activo según reproduciendo().

  videoRef = viewChild.required<ElementRef<HTMLVideoElement>>('videoRef')

  reproduciendo = signal(false);
  tiempoActual = signal(0);
  duracion = signal(0);

  progreso = computed<number>(() => {
    return this.duracion() === 0 ? 0 : (this.tiempoActual() / this.duracion()) * 100;
  });

  reproducir(): void {
    this.videoRef().nativeElement.play()
  }

  pausar(): void {
    this.videoRef().nativeElement.pause()
  }

  reiniciar(): void {
    this.videoRef().nativeElement.currentTime = 0
    this.reproducir()
  }

  onLoadedMetadata(event: Event): void {
    this.duracion.set((event.target as HTMLVideoElement).duration);
  }

  onTimeUpdate(event: Event): void {
    this.tiempoActual.set((event.target as HTMLVideoElement).currentTime);
  }

}
