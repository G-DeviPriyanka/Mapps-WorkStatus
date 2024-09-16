import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  currentInput: string = '';
  history: string[] = [];

  appendValue(value: string) {
    this.currentInput += value;
  }

  clear() {
    this.currentInput = '';
  }

  calculate() {
    try {
      // Evaluate the expression safely
      const result = eval(this.currentInput);
      const historyRecord = `${this.currentInput} = ${result}`;
      this.history.unshift(historyRecord); // Add the result to history
      this.currentInput = result.toString();
    } catch (error) {
      this.currentInput = 'Error';
    }
  }
}
