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
  it('should calculate age based on a birthday', function() {
    let ageCalc = new AgeCalc("1990-5-10");
    expect(ageCalc.bdayToAge("1990-5-10")).toEqual(27);
  });
  it('should calculate age based on a birthday that is later this year', function() {
    let ageCalc = new AgeCalc("1990-12-10");
    expect(ageCalc.bdayToAge("1990-12-10")).toEqual(26);
  });
  it('should calculate age based on a birthday that falls later on the current month', function() {
    let ageCalc = new AgeCalc("1990-9-30");
    expect(ageCalc.bdayToAge("1990-9-30")).toEqual(26);
  });
  it('should calculate age on mercury based on earth age', function() {
    let ageCalc = new AgeCalc(27, "1990-9-30");
    expect(ageCalc.bdayToAge("1990-9-30")).toEqual(26);
    expect(ageCalc.ageInMercury(27)).toEqual(113);
  });
  it('should calculate age on venus based on earth age', function() {
    let ageCalc = new AgeCalc(27, "1990-9-30");
    expect(ageCalc.bdayToAge("1990-9-30")).toEqual(26);
    expect(ageCalc.ageInVenus(27)).toEqual(44);
  });
  it('should calculate age on mars based on earth age', function() {
    let ageCalc = new AgeCalc(27, "1990-9-30");
    expect(ageCalc.bdayToAge("1990-9-30")).toEqual(26);
    expect(ageCalc.ageInMars(27)).toEqual(14);
  });
  it('should calculate age on jupiter based on earth age', function() {
    let ageCalc = new AgeCalc(27, "1990-9-30");
    expect(ageCalc.bdayToAge("1990-9-30")).toEqual(26);
    expect(ageCalc.ageInJupiter(27)).toEqual(2);
  });
});
