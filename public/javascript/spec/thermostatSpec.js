'use strict';

describe('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  })

  it('starts at 20 degrees', function(){
    expect(thermostat.getCurrentTemp()).toEqual(20)
  })

  it('increases temperature', function(){
    thermostat.up();
    expect(thermostat.getCurrentTemp()).toEqual(21)
  })

  it('decreases temperature', function(){
    thermostat.down();
    expect(thermostat.getCurrentTemp()).toEqual(19)
  })

  it('has a minimum temperature of 10 degrees', function(){
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemp()).toEqual(10);
  })

  it('has power saving mode on by default', function(){
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can switch PSM off', function(){
    thermostat.psmOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  })

  it('can switch PSM on', function(){
    thermostat.psmOff();
    thermostat.psmOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  })

  it('can be reset to its default temperature', function(){
    thermostat.up();
    thermostat.reset();
    expect(thermostat.getCurrentTemp()).toEqual(20)
  })

  describe('when power saving mode is on', function(){

    it('has a max temperature of 25 degrees', function(){
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemp()).toEqual(25);
    })
  })

  describe('when power saving mode is off', function() {

    it('has a maximum temperature of 32 degrees', function() {
      thermostat.psmOff();
      for (var i = 0; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemp()).toEqual(32);
    });
  });

  describe('displaying the usage levels', function(){
    describe('when the temperature is less than 18 degrees', function(){
      it('is considered to be low energy usage', function(){
        for (var i = 0; i < 3; i++) {
          thermostat.down();
        }
        expect(thermostat.energyUsage()).toEqual('low-usage');
      })
    })
    describe('when the temperature is between 18 and 25', function(){
      it('is considered to be medium energy usage', function(){
        expect(thermostat.energyUsage()).toEqual('medium-usage');
      })
    })

    describe('when the temperature is above 25 degrees', function(){
      it('is considred to be high energy usage', function(){
        thermostat.powerSavingMode = false;
        for (var i = 0; i < 6; i++) {
          thermostat.up();
        }
        expect(thermostat.energyUsage()).toEqual('high-usage');
      })
    })
  })
})
