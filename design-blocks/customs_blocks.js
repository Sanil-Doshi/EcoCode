// Turn Off Lights
Blockly.Blocks['turn_off_lights'] = {
  init: function () {
      this.appendDummyInput().appendField("Turn Off Lights");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Turn off lights when not in use.");
      this.setHelpUrl("");
  },
};

Blockly.Python['turn_off_lights'] = function (block) {
  var code = 'print("Remember to turn off lights when not in use.")\n';
  code += 'energy_tips = get_energy_tips()  # Assuming a get_energy_tips function in Python\n';
  code += 'if energy_tips:\n    print(energy_tips)\n';
  return code;
};

// Motion Sensor
Blockly.Blocks['motion_sensor'] = {
  init: function () {
      this.appendDummyInput().appendField("Motion Sensor");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
      this.setTooltip("Learn about motion sensors for energy efficiency.");
      this.setHelpUrl("");
  },
};

Blockly.Python['motion_sensor'] = function (block) {
  var code = 'print("Benefits of motion sensors for energy efficiency:")\n';
  code += 'print("Motion sensors reduce energy waste by turning off lights when not needed.")\n';
  return code;
};

// Reduce Water Usage
Blockly.Blocks['reduce_water_usage'] = {
  init: function () {
      this.appendDummyInput().appendField("Reduce Water Usage");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
      this.setTooltip("Reduce water consumption with practical tips.");
      this.setHelpUrl("");
  },
};

Blockly.Python['reduce_water_usage'] = function (block) {
  var code = 'print("Practical suggestions to reduce water consumption:")\n';
  code += 'water_tips = get_water_saving_tips()  # Assuming a get_water_saving_tips function in Python\n';
  code += 'if water_tips:\n    print(water_tips)\n';
  return code;
};



