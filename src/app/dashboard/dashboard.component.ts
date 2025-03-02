import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  totalIncome: number = 10000;
  totalExpenses: number = 5000;
  balance: number = this.totalIncome - this.totalExpenses;
}
