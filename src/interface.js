$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').click(function(){
    thermostat.up();
    updateTemperature();
  });

  $('#temperature-down').click(function(){
    thermostat.down();
    updateTemperature();
  });

  $('#temperature-reset').click(function(){
    thermostat.reset();
    updateTemperature();
  });

  $('#powersaving-on').click(function(){
    thermostat.powerSavingModeOn();
    $('#power-saving-status').text('on');
    updateTemperature();
  });

  $('#powersaving-off').click(function(){
    thermostat.powerSavingModeOff();
    $('#power-saving-status').text('off');
    updateTemperature();
  });

  //API CALL//

  // $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
  //   $('#current-temperature').text(data.main.temp);
  // });


  $('#select-city').submit(function(event){
    event.preventDefault();
    apiCall();
  });

  function apiCall() {
    var city = $('#current-city').val();
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
    var token= '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric';
    $.get(url+city+token, function(data) {
      $('#current-temperature').text(data.main.temp);
    });
  }

  // $('#weather').click(function(london){
  //   $.ajax({
  //     url: 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric',
  //     data: 'london',
  //     success: function(){
  //       console.log('It worked!');
  //     },
  //     dataType: 'json',
  //   })
  //
  // })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.colour);
  }

});
