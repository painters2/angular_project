import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';


interface ITransaction {
  category:string|null,
  amount:Number | null,
  note:string | null,
  date:string | null
}


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  addTransactionForm = this.formBuilder.group({
    category: null,
    amount: null,
    note: null,
    date:null
  });

  transactions:Array<ITransaction> = [];

  constructor(
    private formBuilder: FormBuilder,
  ) {
    
  }

  onSubmit(): void {
    
    this.transactions.push({
      category: this.addTransactionForm.value.category || "",
      amount: this.addTransactionForm.value.amount || 0,
      note: this.addTransactionForm.value.note || "",
      date:this.addTransactionForm.value.date || ""
    })
    console.warn('Your order has been submitted', this.addTransactionForm.value);
    this.addTransactionForm.reset();
  }

}

