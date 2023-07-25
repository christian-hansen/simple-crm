import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartTimeperiodService {

  constructor() { }

  getMonthFromArr(date: Date, arr: Array<[]>,i: number) {
    return arr[date.getMonth() - i];
  }
  
  getMonthOfNLastYears(date: Date, arr: Array<[]>, i: number, n: number) {
    return arr[date.getMonth() - i + (n * 12)];
  }
  
  getNYearsBefore(date: Date, i: number, n: number) {
    return date.getFullYear() - n;
}

loadLast12Months(today: Date, months:Array<[]>, last12Months:Array<[]>) {
  for (let i = 11; i >= 0; i--) {
    const element = this.getMonthFromArr(today, months, i);

    if (element !== undefined) {
      const month = this.getMonthFromArr(today, months, i);
      last12Months.push(month)
    } else {
      const month = this.getMonthOfNLastYears(today, months, i, 1);
      last12Months.push(month)
    }     
  }
}

setLabels(today: Date, months:Array<[]>, labels:any) {
  for (let i = 11; i >= 0; i--) {
    const element = this.getMonthFromArr(today, months, i);

    if (element !== undefined) {
      const month = this.getMonthFromArr(today, months, i);
      const year = this.getNYearsBefore(today, i, 0)
      labels.push(month + " " + year)
    } else {
      const month = this.getMonthOfNLastYears(today, months, i, 1);
      const year = this.getNYearsBefore(today, i, 1)
      labels.push(month + " " + year)
    }      
  }
}
}
