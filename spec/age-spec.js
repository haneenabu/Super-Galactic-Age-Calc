import { AgeCalc } from './../js/ageCalc.js';

describe('AgeCalc', function(){

  it ('should test ageCalc instance of AgeCalc', function() {
    let ageCalc = new AgeCalc("3");
    expect(ageCalc.age).toEqual("3");
  });
  it('should calculate number of seconds in 1 year', function(){
    let ageCalc = new AgeCalc("1");
    expect(ageCalc.ageToSec("1")).toEqual(31556952);
  });
  it('should calculate number of seconds in 10 year', function(){
    let ageCalc = new AgeCalc("10");
    expect(ageCalc.ageToSec("10")).toEqual(315569520);
  });
  it('should calculate number of seconds in 27 year', function(){
    let ageCalc = new AgeCalc("27");
    expect(ageCalc.ageToSec("27")).toEqual(852037704);
  });
});
