function Thermostat() {
this.temperature = 20;
}
Thermostat.prototype.up = function() {
  this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.temperature === 10) {throw("Temperature cannot go under 10");}
  else {this.temperature -= 1; return this.temperature;};
};
