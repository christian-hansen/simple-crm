import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateCheckService {

  constructor() { }

  checkPreviousNMonth(date: number, previousMonths: number) {
    const currentDate = new Date(Date.now());
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
  
    const dateToCheck = new Date(date);
    const monthToCheck = dateToCheck.getMonth();
    const yearToCheck = dateToCheck.getFullYear();
  
    let monthDiff = month - monthToCheck;
    let yearDiff = year - yearToCheck;
  
    // console.log("Today", currentDate);
    // console.log("Month", month);
    // console.log("Year", year);
  
    // console.log("dateToCheck", dateToCheck);
    // console.log("monthToCheck", monthToCheck);
    // console.log("yearToCheck", yearToCheck);
  
    // console.log("monthDiff", monthDiff);
    // console.log("yearDiff", yearDiff);
  
    
      if (yearDiff === 0 && monthDiff === previousMonths || yearDiff === 1 && monthDiff === (-12 + previousMonths) ) 
      {
        // console.log(true)
        return true;
      } else {
        // console.log(false);
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
    
    // console.log(dayInMs);
    // console.log("timePeriodInMs", timePeriodInMs);
    // console.log("periodToCheck", periodToCheck);
    // console.log("previousTimePeriodInMs", previousTimePeriodInMs);
    
      if (timePeriodInMs >= periodToCheck && periodToCheck <= previousTimePeriodInMs) 
      {
        // console.log(true)
        return true;
      } else {
        // console.log(false);
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
