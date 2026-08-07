import { Component, computed, signal } from '@angular/core';

type NivelFuerza = 'vacio' | 'debil' | 'media' | 'fuerte';

@Component({
  selector: 'app-reto-05-password-strength',
  standalone: true,
  imports: [],
  templateUrl: './reto-05-password-strength.html',
})
export class Reto05PasswordStrength {
  // TODO: importa NgStyle y NgClass de '@angular/common' y agrégalos a
  // "imports". Agrega los computed() porcentaje() (vacio:0, debil:33,
  // media:66, fuerte:100) y color() (un color hex por nivel), y en el
  // template usa [ngStyle] para el ancho/color de la barra y [ngClass]
  // para el color del texto de la etiqueta según nivel().

  password = signal('');

  puntaje = computed<number>(() => {
    const valor = this.password();
    if (!valor) return 0;

    let puntos = 0;
    if (valor.length >= 8) puntos++;
    if (/[a-z]/.test(valor) && /[A-Z]/.test(valor)) puntos++;
    if (/[0-9]/.test(valor)) puntos++;
    if (/[^A-Za-z0-9]/.test(valor)) puntos++;

    return puntos;
  });

  nivel = computed<NivelFuerza>(() => {
    if (!this.password()) return 'vacio';
    if (this.puntaje() <= 1) return 'debil';
    if (this.puntaje() <= 2) return 'media';
    return 'fuerte';
  });

  actualizarPassword(event: Event): void {
    this.password.set((event.target as HTMLInputElement).value);
  }
}
