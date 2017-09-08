export class AgeCalc{
  constructor(age, bday){
    this.age = age;
    this.bday = bday;
  }
  ageToSec(age){
    let ageInSec = age * 31556952;
    return ageInSec;
  }
  bdayToAge(bday){
    let now = new Date();
    let birthday = new Date(bday);
    let age = now.getFullYear() - birthday.getFullYear();
    let month = now.getMonth() - birthday.getMonth();

    if ((month < 0) || (month === 0 && (now.getDate() < birthday.getDate())) ){
      age --;
    }
    return age;
  }
  ageInMercury(age){
    let ageInSec = this.ageToSec(age);
    let formula = 31556952 * (.24);
    let years = ageInSec/formula;
    return Math.round(years);
  }
  ageInVenus(age){
    let ageInSec = this.ageToSec(age);
    let formula = 31556952 * (.62);
    let years = ageInSec/formula;
    return Math.round(years);
  }
  ageInMars(age){
    let ageInSec = this.ageToSec(age);
    let formula = 31556952 * (1.88);
    let years = ageInSec/formula;
    return Math.round(years);
  }
  ageInJupiter(age){
    let ageInSec = this.ageToSec(age);
    let formula = 31556952 * (11.86);
    let years = ageInSec/formula;
    return Math.round(years);
  }
}
