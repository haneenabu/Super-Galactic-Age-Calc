//import{AgeCalc} from './../js/ageCalc.js';
$(document).ready(function() {
  $('#ageConverter').submit(function(event) {
    event.preventDefault();
    let input = $('#age').val();
    if (isNaN(input)) {
      alert("You did not enter a number");
    } else{
      let output = AgeCalc(input);
      $('#ageInSecResult').text(output);
    }
  });
});
