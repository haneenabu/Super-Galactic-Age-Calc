import { AgeCalc } from './../js/ageCalc.js';

describe('AgeCalc', function(){

  it ('should test ageCalc instance of AgeCalc', function() {
    let ageCalc = new AgeCalc("3");
    expect(ageCalc.age).toEqual("3");
  });

});
