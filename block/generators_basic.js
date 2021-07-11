const nativeImage = require("electron").nativeImage;
module.exports = function(Blockly){
  'use strict';

  
  Blockly.JavaScript['analog_read_turtle_robot'] = function(block) {
    var value_pin = block.getFieldValue('pin');  
    var code = `analogRead(${value_pin})`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  Blockly.JavaScript['analog_read_black_turtle_robot'] = function(block) {
    var value_pin = block.getFieldValue('pin');  
    var code = `analogRead(${value_pin}) < ReadSensorRefValue(abs(17-${value_pin}))`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  Blockly.JavaScript['analog_read_white_turtle_robot'] = function(block) {
    var value_pin = block.getFieldValue('pin');  
    var code = `analogRead(${value_pin}) > ReadSensorRefValue(abs(17-${value_pin}))`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  Blockly.JavaScript['ultrasonic_turtle_robot'] = function(block) {
    var value_pin = block.getFieldValue('pin');  
    var code = `read_distance()`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
 
  Blockly.JavaScript['turtle_Robot_setCalibrate'] = function(block) {  
    var code = 'Robot_setCalibrate();\n';
    return code;
  };
  
  Blockly.JavaScript['button_1_status'] = function(block) {  
    var code = '(digitalRead(4))';  
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
   Blockly.JavaScript['sw1_press'] = function(block) {  
    var code = 'SW1_press();\n';  
    return code;
  };
  Blockly.JavaScript['turtle_beep'] = function(block) {  
    var dropdown_ch = block.getFieldValue('ch');
    if(dropdown_ch == 1){
      var code = 'digitalWrite(2,1);\n';
    }
    else if(dropdown_ch == 2){
      var code = 'digitalWrite(2,0);\n';
    }
     else if(dropdown_ch == 3){
      var code = 'beep();\n';
    }
    return code;
  };
  Blockly.JavaScript['turtle_Readline'] = function(block) {  
    var code = 'readline()';  
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  Blockly.JavaScript['turtle_ReadMinValue'] = function(block) {
    var value_ch = block.getFieldValue('ch');  
    var code = `ReadSensorMinValue(${value_ch})`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  Blockly.JavaScript['turtle_ReadMaxValue'] = function(block) {
    var value_ch = block.getFieldValue('ch');  
    var code = `ReadSensorMaxValue(${value_ch})`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  Blockly.JavaScript['turtle_ReadRefValue'] = function(block) {
    var value_ch = block.getFieldValue('ch');  
    var code = `ReadSensorRefValue(${value_ch})`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  

}




