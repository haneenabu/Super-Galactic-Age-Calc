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
    console.log(month);
    console.log(birthday.getDate());
    console.log(now.getDate());
    if ((month < 0) || (month === 0 && (now.getDate() < birthday.getDate())) ){
      age --;
    }
    return age;
  }
}
