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
    var code = `analogRead(${value_pin}) < (500)`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  Blockly.JavaScript['analog_read_white_turtle_robot'] = function(block) {
    var value_pin = block.getFieldValue('pin');  
    var code = `analogRead(${value_pin}) > (500)`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  Blockly.JavaScript['ultrasonic_turtle_robot'] = function(block) {
    var value_pin = block.getFieldValue('pin');  
    var code = `read_distance()`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  Blockly.JavaScript['turtle_servo'] = function(block) {
    var dropdown_ch = block.getFieldValue('ch');
    var value_angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var code = 'servo(' + dropdown_ch + ', ' + value_angle + ');\n';
    return code;
  };
  Blockly.JavaScript['turtle_Motor'] = function(block) {
    var dropdown_ch = block.getFieldValue('ch');
    var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var code = 'motor_action(' + dropdown_ch + ', ' + value_speed + ', ' + value_speed + ');\n';
    return code;
  };
  Blockly.JavaScript['turtle_motor_forward'] = function(block) {
    var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var code = '';
    code += 'motor_action(1,' + value_speed + ',' + value_speed + ');\t';
    return code;
  };

  Blockly.JavaScript['turtle_motor_backward'] = function(block) {
    var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var code = '';
    code += 'motor_action(2,' + value_speed + ',' + value_speed + ');\t';
    return code;
  };
  Blockly.JavaScript['turtle_motor_Reduce'] = function(block) {
    var value_speed1 = Blockly.JavaScript.valueToCode(block, 'speed1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var value_speed2 = Blockly.JavaScript.valueToCode(block, 'speed2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var code = '';
    code += 'motor_reduce(' + value_speed1 + ','+value_speed2 +');\n';
    return code;
  };

  Blockly.JavaScript['turtle_motor_backward2'] = function(block) {
    var value_speed1 = Blockly.JavaScript.valueToCode(block, 'speed1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var value_speed2 = Blockly.JavaScript.valueToCode(block, 'speed2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var code = '';
    code += 'motor(1,2,' + value_speed1 + ');\t';
    code += 'motor(2,2,' + value_speed2 + ');\n';
    return code;
  };

  Blockly.JavaScript['turtle_motor_turn_left'] = function(block) {
    var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var code = '';
    code += 'motor_action(3,' + value_speed + ',' + value_speed + ');\t';
    return code;
  };

  Blockly.JavaScript['turtle_motor_turn_right'] = function(block) {
    var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var code = '';
    code += 'motor_action(4,' + value_speed + ',' + value_speed + ');\t';
    return code;
  };

  Blockly.JavaScript['turtle_motor_spin_left'] = function(block) {
    var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var code = '';
    code += 'motor_action(5,' + value_speed + ',' + value_speed + ');\t';
    return code;
  };

  Blockly.JavaScript['turtle_motor_spin_right'] = function(block) {
    var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var code = '';
    code += 'motor_action(6,' + value_speed + ',' + value_speed + ');\t';
    return code;
  };
  Blockly.JavaScript['turtle_motor_stop'] = function(block) {  
    var code = 'ao();\n';
    return code;
  };

  Blockly.JavaScript['turtle_motor_stop_ch'] = function(block) {
    var dropdown_ch = block.getFieldValue('ch');
    if(dropdown_ch == 1){
      var code = 'motor(1, 1, 0);delay(10);\n';
    }
    else if(dropdown_ch == 2){
      var code = 'motor(2, 1, 0);delay(10);\n';
    }
     else if(dropdown_ch == 3){
      var code = 'motor(1, 1, 0);\n';
       code += 'motor(2, 1, 0);delay(10);\n';
    }
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
  

}




