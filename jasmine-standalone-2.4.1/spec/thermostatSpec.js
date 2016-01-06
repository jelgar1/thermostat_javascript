describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("Temperature", function() {
    it("default temperature should be 20", function() {
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe("Up", function() {
    it("should increase the temperature by incriments of 1", function() {
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });
  });

  describe("Down", function() {
    it("should decrease the temperature by incriments of 1", function() {
      thermostat.down();
      expect(thermostat.temperature).toEqual(19);
    });
  });

   describe("min_temp", function() {
     it("the temperature should not be able to go under 10", function() {
       thermostat.temperature = 10;
       expect(function(){thermostat.down();}).toThrow("Temperature cannot go under 10");
     });
   });

   describe("max_temp", function() {
     it("the temperature should not be able to go over 25 when power saving is on", function() {
       thermostat.power_save = true;
       thermostat.temperature = 25;
       expect(function(){thermostat.up();}).toThrow("Temperature cannot go above 25 when power saving is on");
     });
   });



});
