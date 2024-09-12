import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tracker';
  amt: number = 0;
  lname = new FormGroup({
    first: new FormControl('', Validators.required),
    second: new FormControl('', Validators.required)
  });

  expense: { amount: number, description: string }[] = [];
  income: { amount: number, description: string }[] = [];
  editIndex: number | null = null;
  editType: 'income' | 'expense' | null = null;
chart:any
  calculate() {
    const firstControl = this.lname.get('first');
    const secondControl = this.lname.get('second');
    const val = firstControl?.value ? parseFloat(firstControl.value) : 0;
    const sel = secondControl?.value || '';

    if (this.editIndex !== null && this.editType !== null) {
      const entry = { amount: val, description: sel };

      if (this.editType === 'income') {
        this.income[this.editIndex] = entry;
      } else {
        this.expense[this.editIndex] = entry;
      }

      this.editIndex = null;
      this.editType = null;
    } else {
      this.amt = this.amt + val;
      const entry = { amount: val, description: sel };

      if (val > 0) {
        this.income.push(entry);
      } else {
        this.expense.push(entry);
      }
    }

    this.lname.reset();
  }

  getTotalIncome(): number {
    return this.income.reduce((acc, item) => acc + item.amount, 0);
  }

  getTotalExpense(): number {
    return this.expense.reduce((acc, item) => acc + item.amount, 0);
  }

  edit(item: { amount: number, description: string }, type: 'income' | 'expense') {
    let arrayToEdit = type === 'income' ? this.income : this.expense;
    const index = arrayToEdit.findIndex(i => i === item);

    if (index !== -1) {
      this.lname.setValue({
        first: item.amount.toString(),
        second: item.description
      });
      this.amt -= item.amount;
    }
  }
  
  del(item: { amount: number, description: string }, type: 'income' | 'expense') {
    let arrayToEdit = type === 'income' ? this.income : this.expense;
    const index = arrayToEdit.findIndex(i => i === item);

    if (index !== -1) {
      this.lname.setValue({
        first: item.amount.toString(),
        second: item.description
      });
      arrayToEdit.splice(index, 1);
      this.amt -= item.amount;
    }
  }
}
