export class AgeCalc{
  constructor(age){
    this.age = age;
  }
  ageToSec(age){
    let ageInSec = age * 31556952;
    return ageInSec;
  }
}
