import { Component, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reto-03-inputs',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reto-03-inputs.html',
})
export class Reto03Inputs {

  inputModel = model('')

  inputSignal = signal('')

  actualizarInputSignal(event: Event){
    this.inputSignal.set((event.target as HTMLInputElement).value)
  }
}
