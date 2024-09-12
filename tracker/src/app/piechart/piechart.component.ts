import { Component, Input, OnChanges } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnChanges {
  @Input() incomeTotal!: number;
  @Input() expenseTotal!: number;

  public chart: any;

  ngOnChanges(): void {
    this.createChart();
  }

  createChart() {
    if (this.chart) {
      this.chart.destroy(); // Destroy the old chart instance if it exists to avoid duplication
    }

    this.chart = new Chart("MyChart", {
      type: 'pie',
      data: {
        labels: ['Expense', 'Income'],
        datasets: [{
          label: 'Budget',
          data: [this.expenseTotal, this.incomeTotal], // Dynamic data
          backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)'],
          hoverOffset: 4
        }]
      },
      options: {
        aspectRatio: 2.5,
        plugins: {
          title: {
            display: true,
            text: 'Income vs Expense Distribution',
            font: {
              size: 24,
              weight: 'bold',
              family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
            },
            padding: {
              top: 10,
              bottom: 30
            }
          },
          legend: {
            display: true,
            labels: {
              font: {
                size: 14,
                family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
              }
            }
          }
        }
      }
    });
  }
}
