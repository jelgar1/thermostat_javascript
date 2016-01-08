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

  $('#power-saving-button').click(function(){
    if (thermostat.power_save === true) {
      thermostat.powerSavingModeOff();
      $('#power-saving-status').text('off');
      $('#power-saving-button').addClass( "powersave-off");
      updateTemperature();
    } else {
      thermostat.powerSavingModeOn();
      $('#power-saving-status').text('on');
      $('#power-saving-button').removeClass( "powersave-off");
      updateTemperature();
    }
  });

  //API CALL//


  $('#select-city').submit(function(event){
    event.preventDefault();
    apiCall();
  });

  function apiCall() {
    var city = $('#current-city').val();
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
    var token= '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric';
    $.get(url+city+token, function(data) {
      var city = $('#current-city').val();
      $('#current-temperature').text(city+': '+data.main.temp);
    });
  }

//HELPER FUNCTIONS//

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature-box').attr('class', thermostat.colour);
  }

});
