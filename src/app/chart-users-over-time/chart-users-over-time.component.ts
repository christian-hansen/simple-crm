import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { ChartTimeperiodService } from '../services/chart-timeperiod.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-chart-users-over-time',
  templateUrl: './chart-users-over-time.component.html',
  styleUrls: ['./chart-users-over-time.component.scss'],
})
export class ChartUsersOverTimeComponent implements OnInit {
  public chart: any;
  last12Months:Array<[]> = [];
  months: any = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  labels: any = []
  today = new Date();
  usersPerMonth: any = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  constructor(private dataservice: DataService, private timeperiodservice: ChartTimeperiodService) {
    this.timeperiodservice.loadLast12Months(this.today, this.months, this.last12Months);
  }

  countUsersPerMonth(users: any) {

    users.forEach((userdata: any) => {
      let userCreateDate = new Date(userdata.createDate);  
      let userCreationMonth = this.timeperiodservice.getMonthFromArr(userCreateDate, this.months, 0);
      let indexInMonths = this.last12Months.indexOf(userCreationMonth);
      this.usersPerMonth[indexInMonths] += 1;
      
  });
  }

  async ngOnInit() {
    await this.loadData();
    this.timeperiodservice.setLabels(this.today, this.months, this.labels);
  }

  async loadData() {
    this.dataservice.loadUsers().subscribe((users => {
      this.countUsersPerMonth(users);
      this.createChart(); 
    }));
  }

  createChart() {
    this.chart = new Chart('users-over-time', {
      type: 'line', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: this.labels,
        datasets: [
          {
            label: 'New customers',
            data: this.usersPerMonth,
            backgroundColor: 'transparent',
            fill: true,
            borderColor: 'darkblue',
            tension: 0.5
          }
        ],
      },

      options: {
        
        aspectRatio: 1.25,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
      
    });
    
  }
}
