//'use strict';

function Thermostat() {
this.temperature = 20;
this.power_save = true;
this.colour = 'medium';
}
var min_temp = 10;
var max_temp_on = 25;
var max_temp_off = 32;

Thermostat.prototype.up = function() {
  if(this.power_save === true && this.temperature === max_temp_on) {throw("Temperature cannot go above 25 when power saving is on");}
  else if(this.power_save === false && this.temperature === max_temp_off) {throw("Temperature cannot go above 32 when power saving is off");}
  else {this.temperature += 1; this.colour_change(); return this.temperature;}

};

Thermostat.prototype.down = function() {
  if (this.temperature === min_temp) {throw("Temperature cannot go under 10");}
  else {this.temperature -= 1; this.colour_change(); return this.temperature;}


};

Thermostat.prototype.reset = function() {
   this.temperature = 20;
   this.colour_change();
};

Thermostat.prototype.colour_change = function() {
  if(this.temperature < 17) {this.colour = 'low';}
  else if (this.temperature > 25) {this.colour = 'high';}
  else {this.colour = 'medium';}
};

Thermostat.prototype.powerSavingModeOn = function() {
  this.power_save = true;
};

Thermostat.prototype.powerSavingModeOff = function() {
  this.power_save = false;
};
