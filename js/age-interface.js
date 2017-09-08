import { AgeCalc } from './../js/ageCalc.js';

$(document).ready(function() {
  $('#ageConverter').submit(function(event) {

    event.preventDefault();
    let input = $('#age').val();
    if (isNaN(input)) {
      alert("You did not enter a number");
    } else{
      let output = new AgeCalc(input);
      $('#ageInSecResult').text(output.ageToSec(input));

    }
  });
  $('#dateToAge').submit(function(event) {
      event.preventDefault();
      let date = $('#bday').val();
      console.log(date);
      let age = new AgeCalc(date);
      $('#ageDate').text(age.bdayToAge(date));
  });
});
