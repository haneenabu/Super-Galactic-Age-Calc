export class AgeCalc{
  constructor(age, bday, contintent, gender){
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

  //https://www.statista.com/statistics/270861/life-expectancy-by-continent/
  residence(contintent, gender){
    let lifeExpectancy = 0;
    if(gender === "male" && contintent === "Northern America"){
      lifeExpectancy = 77;
    }else if(gender === "female" && contintent === "Northern America"){
      lifeExpectancy = 81;
    }else if(gender === "male" && contintent === "Europe"){
      lifeExpectancy = 75;
    }else if(gender === "female" && contintent === "Europe"){
      lifeExpectancy = 81;
    }else if(gender === "male" && contintent === "Oceania"){
      lifeExpectancy = 75;
    }else if(gender === "female" && contintent === "Oceania"){
      lifeExpectancy = 79;
    }else if(gender === "male" && contintent === "Latin America and the Caribbean"){
      lifeExpectancy = 73;
    }else if(gender === "female" && contintent === "Latin America and the Caribbean"){
      lifeExpectancy = 79;
    }else if(gender === "male" && contintent === "Asia"){
      lifeExpectancy = 71;
    }else if(gender === "female" && contintent === "Asia"){
      lifeExpectancy = 74;
    }else if(gender === "male" && contintent === "Africa"){
      lifeExpectancy = 61;
    }else if(gender === "female" && contintent === "Africa"){
      lifeExpectancy = 64;
    }
    return lifeExpectancy;
  }
}
