'use strict';

class Thermostat {

  constructor() {
    this.MINIMUN_TEMP = 10;
    this.MAX_TEMP_PSM_ON = 25;
    this.MAX_TEMP_PSM_OFF = 32;
    this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
    this.HIGH_ENERGY_USAGE_LIMIT = 25;
    this.DEFAULT_TEMP = 20;
    this.temp = this.DEFAULT_TEMP;
    this.powerSavingMode = true;
  }

  getCurrentTemp() {
    return this.temp;
  }

  isMinimumTemp() {
    return this.temp === this.MINIMUN_TEMP;
  }

  isMaximumTemp() {
    if (this.isPowerSavingModeOn() === true) {
      return this.temp === this.MAX_TEMP_PSM_ON;
    }
      return this.temp === this.MAX_TEMP_PSM_OFF;
  }

  up() {
    if (this.isMaximumTemp()) {
      return;
    }
    this.temp += 1;
  }

  down() {
    if (this.isMinimumTemp()) {
      return;
    }
    this.temp -= 1;
  }

  energyUsage() {
    if (this.temp < this.MEDIUM_ENERGY_USAGE_LIMIT) {
      return 'low-usage';
    }
    if (this.temp <= this.HIGH_ENERGY_USAGE_LIMIT) {
      return 'medium-usage';
    }
      return 'high-usage'
  }

  reset() {
    this.temp = this.DEFAULT_TEMP;
  }

  isPowerSavingModeOn() {
    return this.powerSavingMode === true;
  }

  psmOff() {
    this.powerSavingMode = false;
  }

  psmOn() {
    this.powerSavingMode = true;
  }
}
