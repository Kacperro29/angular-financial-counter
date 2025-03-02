import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent implements OnInit {
  transactionForm: FormGroup;
  transactions: any[] = [];

  constructor(private fb: FormBuilder) {
    this.transactionForm = this.fb.group({
      amount: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      description: ['', Validators.required],
      category: ['', Validators.required],
      type: ['expense', Validators.required],
    });
  }

  ngOnInit(): void {}

  addTransaction(): void {
    if (this.transactionForm.valid) {
      this.transactions.push(this.transactionForm.value);
      this.transactionForm.reset();
    }
  }
}
