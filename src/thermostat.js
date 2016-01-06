function Thermostat() {
this.temperature = 20;
this.power_save = false;
}
var min_temp = 10;

Thermostat.prototype.up = function() {
  if(this.power_save === true && this.temperature === 25) {throw("Temperature cannot go above 25 when power saving is on");}
  else if(this.power_save === false && this.temperature === 32) {throw("Temperature cannot go above 32 when power save is off");}
  else {this.temperature += 1; return this.temperature;}
};

Thermostat.prototype.down = function() {
  if (this.temperature === min_temp) {throw("Temperature cannot go under 10");}
  else {this.temperature -= 1; return this.temperature;}
};
