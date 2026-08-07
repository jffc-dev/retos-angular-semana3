import { Component, signal } from '@angular/core';

type EstadoSemaforo = 'rojo' | 'amarillo' | 'verde';

interface ILuzSemaforo {
  estado: EstadoSemaforo;
  color: string;
  etiqueta: string;
}

@Component({
  selector: 'app-reto-04-semaforo',
  standalone: true,
  imports: [],
  templateUrl: './reto-04-semaforo.html',
})
export class Reto04Semaforo {
  // TODO: importa NgStyle y NgClass de '@angular/common' y agrégalos a
  // "imports". En el template, usa [ngStyle] en cada luz para pintar
  // 'background-color' con luz.color y 'opacity' según si
  // estadoActual() === luz.estado; usa [ngClass] para agregar un
  // anillo/escala (p.ej. "ring-4 ring-white scale-110") solo a la luz activa.

  luces: ILuzSemaforo[] = [
    { estado: 'rojo', color: '#ef4444', etiqueta: 'Alto' },
    { estado: 'amarillo', color: '#eab308', etiqueta: 'Precaución' },
    { estado: 'verde', color: '#22c55e', etiqueta: 'Siga' },
  ];

  estadoActual = signal<EstadoSemaforo>('rojo');

  siguienteEstado(): void {
    this.estadoActual.update((actual) => {
      const indiceActual = this.luces.findIndex((luz) => luz.estado === actual);
      const siguienteIndice = (indiceActual + 1) % this.luces.length;
      return this.luces[siguienteIndice].estado;
    });
  }
}
