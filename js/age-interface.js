import { AgeCalc } from './../js/ageCalc.js';

$(document).ready(function() {

  $('#ageConverter').submit(function(event) {
    event.preventDefault();
    let input = $('#age').val();
    if (isNaN(input)) {
      alert("Please enter a valid age.");
    } else{
      let output = new AgeCalc(input);
      $('#ageInSecResult').text(output.ageToSec(input));
      $('#result').show();
    }
  });
  $('#dateToAge').submit(function(event) {
      event.preventDefault();
      let date = $('#bday').val();

      let age = new AgeCalc(date);
      $('#ageDate').text(age.bdayToAge(date));
      $('#result1').show();
  });
});




// $('#btnA').click(function(){
//   $('#ageConverter').show();
// });
