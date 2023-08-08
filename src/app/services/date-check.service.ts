import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateCheckService {

  constructor() { }

  checkPreviousNYears(date: number, previousYears: number) {
    const currentDate = new Date(Date.now());
    const year = currentDate.getFullYear();
  
    const dateToCheck = new Date(date);
    const yearToCheck = dateToCheck.getFullYear();
  
    let yearDiff = year - yearToCheck;
    if (yearDiff === previousYears) 
    {
      return true;
    } else {
      return false;
    }
  }

  checkPreviousNMonth(date: number, previousMonths: number) {
    const currentDate = new Date(Date.now());
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
  
    const dateToCheck = new Date(date);
    const monthToCheck = dateToCheck.getMonth();
    const yearToCheck = dateToCheck.getFullYear();
  
    let monthDiff = month - monthToCheck;
    let yearDiff = year - yearToCheck;
  
      if (yearDiff === 0 && monthDiff === previousMonths || yearDiff === 1 && monthDiff === (-12 + previousMonths) ) 
      {
        return true;
      } else {
        return false;
      }
  }

  checkPreviousNDays(date: number, previousDays: number) {
    const currentDate = new Date(Date.now());
    const dateToCheck = new Date(date);
    
    const dayInMs = 24 * 60 * 60 * 1000;
    const timePeriodInMs = previousDays * dayInMs;
    const previousTimePeriodInMs = previousDays * dayInMs * 2;
    
    const periodToCheck = currentDate.valueOf() - dateToCheck.valueOf();
    
    
      if (timePeriodInMs >= periodToCheck && periodToCheck <= previousTimePeriodInMs) 
      {
        return true;
      } else {
        return false;
      }
  }

  calculateChangeRate(input1: number, input2: number) {
    if(input1 === 0) {
      return "-" + input2;
    } else if (input2 === 0) {
      return '+' + input1;
    } else if (input1 === 0 && input2 === 0) {
      return "0"
    } else if (input1 === input2) {
      return "+/- 0"
    }
    else {
    let result = ((input1 / input2 * 100)-100).toFixed(1) + "%";
    return result;}
}
}
