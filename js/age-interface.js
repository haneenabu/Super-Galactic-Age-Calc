import { AgeCalc } from './../js/ageCalc.js';

$(document).ready(function() {

  $('#dateToAge').submit(function(event) {
    event.preventDefault();

    let date = $('#bday').val();
    let contintent= $('#dropDown :selected').text();
    let gender = $('input[name=gender]:checked').val();

    let ageCalc = new AgeCalc(date);
    let age = ageCalc.bdayToAge(date);
    let yearsLeft = ageCalc.residence(age, contintent, gender);
    console.log(yearsLeft > 0);
    $('#ageDate').text(age);
    $('#ageInSecResult').text(ageCalc.ageToSec(age));
    $('#earthYears').text(yearsLeft);
    $('#mercuryYears').text(ageCalc.ageInMercury(yearsLeft));
    $('#venusYears').text(ageCalc.ageInVenus(yearsLeft));
    $('#marsYears').text(ageCalc.ageInMars(yearsLeft));
    $('#jupiterYears').text(ageCalc.ageInJupiter(yearsLeft));
    $('.output').show();
    $('#result').show();

    if(yearsLeft > 0){
      $('.planets').show();
      $('.outLived').hide();
    } else {
      $('.planets').hide();
      $('.outLived').show();
    }


  });
});
