import { Component, input, output } from '@angular/core';
import { ITarea } from '../../../interfaces/tarea.interface';

@Component({
  selector: 'app-tarea-item',
  standalone: true,
  templateUrl: './tarea-item.html',
})
export class TareaItemComponent {
  tarea = input.required<ITarea>();

  toggleCompletada = output<number>();
  eliminar = output<number>();

  alternarCompletada(): void {
    this.toggleCompletada.emit(this.tarea().id);
  }

  eliminarTarea(): void {
    this.eliminar.emit(this.tarea().id);
  }
}
