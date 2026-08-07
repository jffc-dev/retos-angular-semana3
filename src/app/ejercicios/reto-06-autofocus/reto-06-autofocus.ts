import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-reto-06-autofocus',
  standalone: true,
  imports: [],
  templateUrl: './reto-06-autofocus.html',
})
export class Reto06Autofocus {
  // TODO: agrega inputRef = viewChild<ElementRef<HTMLInputElement>>('inputRef')
  // y, en el constructor, un effect() que llame a
  // inputRef()?.nativeElement.focus() para enfocar el input al montar.
  // Importa NgClass y úsalo en el input para poner el borde en rojo cuando
  // mostrarError() sea true. Implementa seleccionarTodo() llamando
  // inputRef()?.nativeElement.select(), y en limpiar() además de resetear
  // el signal, vuelve a enfocar el input con inputRef()?.nativeElement.focus().

  nombre = signal('');

  esValido = computed(() => this.nombre().trim().length >= 3);
  mostrarError = computed(() => this.nombre().length > 0 && !this.esValido());

  actualizarNombre(event: Event): void {
    this.nombre.set((event.target as HTMLInputElement).value);
  }

  seleccionarTodo(): void {}

  limpiar(): void {
    this.nombre.set('');
  }
}
