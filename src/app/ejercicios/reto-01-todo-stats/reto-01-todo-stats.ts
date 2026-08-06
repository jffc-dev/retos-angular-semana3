import { Component, signal } from '@angular/core';
import { ITarea } from '../../interfaces/tarea.interface';
import { TareaItemComponent } from './tarea-item/tarea-item';

@Component({
  selector: 'app-reto-01-todo-stats',
  standalone: true,
  imports: [TareaItemComponent],
  templateUrl: './reto-01-todo-stats.html',
})
export class Reto01TodoStats {
  // TODO: convierte tareas en signal<ITarea[]>([...]) (ver
  // ../../interfaces/tarea.interface.ts), agrega los computed() total(),
  // completadas(), pendientes() y porcentajeAvance() que lo recorran, y un
  // effect() en el constructor que sincronice document.title con
  // pendientes().

  tareasSignal = signal<ITarea[]>([])

  total(): number {
    return this.tareasSignal().length;
  }

  completadas(): number {
    return this.tareasSignal().filter((tarea) => tarea.completada).length;
  }

  pendientes(): number {
    return this.total() - this.completadas();
  }

  porcentajeAvance(): number {
    return this.total() === 0 ? 0 : Math.round((this.completadas() / this.total()) * 100);
  }

  agregarTarea(input: HTMLInputElement): void {
    const texto = input.value.trim();
    if (!texto) return;

    this.tareasSignal.update((listaActual)=>{
      return [...listaActual, { id: Date.now(), texto, completada: false }];
    })
    input.value = '';
  }

  alternarCompletada(id: number): void {
    this.tareasSignal.update((listaActual) => {
      return listaActual.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea,
      );
    })


  }

  eliminarTarea(id: number): void {
    this.tareasSignal.update((listaActual)=>{
      return listaActual.filter((tarea) => tarea.id !== id)
    })
  }
}
