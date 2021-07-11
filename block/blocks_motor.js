const dirIcon = Vue.prototype.$global.board.board_info.dir;
const app = require("electron").remote;
const nativeImage = require("electron").nativeImage;
const dialog = app.dialog;


module.exports = function(Blockly) {
  "use strict";

  Blockly.Blocks['turtle_servo'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("set servo")
        .appendField(new Blockly.FieldDropdown([["D10","1"], ["D11","2"]]), "ch");
      this.appendValueInput("angle")
        .setCheck("Number")
        .appendField("degree");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1db8cc");
      this.setTooltip("");
    }
  };
  Blockly.Blocks['turtle_Motor'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Move (เคลื่อนที่)")
        .appendField(new Blockly.FieldDropdown([["Forward(เดินหน้า)","1"], ["Backward(ถอยหลัง)","2"], ["TrunLeft(เลี้ยวซ้าย)","3"], ["TrunRight(เลี้ยวขวา)","4"], ["SpinLeft(หมุนซ้าย)","5"], ["SpinRight(หมุนขวา)","6"]]), "ch");
      this.appendValueInput("speed")
        .setCheck("Number")
        .appendField("speed");
      this.appendDummyInput()
        .appendField("%");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1db8cc");
      this.setTooltip("");
    }
  };
  Blockly.Blocks['turtle_motor_forward'] = {
    init: function() {
      this.appendValueInput("speed")
        .setCheck("Number")
        .appendField("Move Forward speed");
      this.appendDummyInput()
        .appendField("%");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1db8cc");
      this.setTooltip("");
    }
  };
  Blockly.Blocks['turtle_motor_backward'] = {
    init: function() {
      this.appendValueInput("speed")
        .setCheck("Number")
        .appendField("Move Backward speed");
      this.appendDummyInput()
        .appendField("%");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1db8cc");
      this.setTooltip("");
    }
  };
  Blockly.Blocks['turtle_motor_Reduce'] = {
    init: function() {
      this.appendValueInput("speed1")
        .setCheck("Number")
        .appendField("ลดความเร็ว M ซ้าย:");
      this.appendDummyInput()
        .appendField("%");
        this.appendValueInput("speed2")
        .setCheck("Number")
        .appendField("M ขวา:");
      this.appendDummyInput()
        .appendField("%");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1db8cc");
      this.setTooltip("");
    }
  };
  Blockly.Blocks['turtle_motor_backward2'] = {
    init: function() {
      this.appendValueInput("speed1")
        .setCheck("Number")
        .appendField("M1 Backward speed");
      this.appendDummyInput()
        .appendField("%");
        this.appendValueInput("speed2")
        .setCheck("Number")
        .appendField("M2 Backward speed");
      this.appendDummyInput()
        .appendField("%");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1db8cc");
      this.setTooltip("");
    }
  };
  Blockly.Blocks['turtle_motor_turn_left'] = {
    init: function() {
      this.appendValueInput("speed")
        .setCheck("Number")
        .appendField("Turn Left at speed");
      this.appendDummyInput()
        .appendField("%");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1db8cc");
      this.setTooltip("");
    }
  };
  Blockly.Blocks['turtle_motor_turn_right'] = {
    init: function() {
      this.appendValueInput("speed")
        .setCheck("Number")
        .appendField("Turn Right at speed");
      this.appendDummyInput()
        .appendField("%");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1db8cc");
      this.setTooltip("");
    }
  };
  Blockly.Blocks['turtle_motor_spin_left'] = {
    init: function() {
      this.appendValueInput("speed")
        .setCheck("Number")
        .appendField("Spin Left at speed");
      this.appendDummyInput()
        .appendField("%");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1db8cc");
      this.setTooltip("");
    }
  };
  Blockly.Blocks['turtle_motor_spin_right'] = {
    init: function() {
      this.appendValueInput("speed")
        .setCheck("Number")
        .appendField("Spin Right at speed");
      this.appendDummyInput()
        .appendField("%");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1db8cc");
      this.setTooltip("");
    }
  };
  Blockly.Blocks['turtle_motor_stop'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Stop Moving");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1db8cc");
      this.setTooltip("");
    }
  };
  Blockly.Blocks['turtle_motor_stop_ch'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Stop Moving (มอเตอร์หยุด)")
        .appendField(new Blockly.FieldDropdown([["ALL","3"], ["Left ซ้าย","1"], ["Right ขวา","2"]]), "ch")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1db8cc");
      this.setTooltip("");
    }
  };
  
  Blockly.Blocks['turtle_Run_ToCross'] = {
    init: function() {
      this.appendValueInput("speed_motor")
        .setCheck("Number")
        .appendField("Robot run until Cross (วิ่งตามเส้นไปหาเส้นตัด)");
      this.appendDummyInput()
        .appendField("%");
      this.appendValueInput("kp")
        .setCheck("Number")
        .appendField("KP:");
      this.appendValueInput("kd")
        .setCheck("Number")
        .appendField("KD:");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1db8cc");
      this.setTooltip("");
    }
  };
  Blockly.Blocks['turtle_Run_PID_ToWall'] = {
    init: function() {
      this.appendValueInput("speed_motor")
        .setCheck("Number")
        .appendField("Robot วิ่งตามเส้นความเร็ว");
      this.appendDummyInput()
        .appendField("%");
      this.appendValueInput("distance_limit")
        .setCheck("Number")
        .appendField("ไปหาวัตถุระยะ");
      this.appendValueInput("kp")
        .setCheck("Number")
        .appendField("cm KP:");
      this.appendValueInput("kd")
        .setCheck("Number")
        .appendField("KD:");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1db8cc");
      this.setTooltip("");
    }
  };
  Blockly.Blocks['turtle_TurnLeft_ToLine'] = {
    init: function() {
      this.appendValueInput("speed")
        .setCheck("Number")
        .appendField("Spin Left to line (เลี้ยวซ้ายไปหาเส้น) speed:");
      this.appendDummyInput()
        .appendField("%");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1db8cc");
      this.setTooltip("");
    }
  };
  Blockly.Blocks['turtle_TurnRight_ToLine'] = {
    init: function() {
      this.appendValueInput("speed")
        .setCheck("Number")
        .appendField("Spin Right to line (เลี้ยวขวาไปหาเส้น) speed:");
      this.appendDummyInput()
        .appendField("%");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1db8cc");
      this.setTooltip("");
    }
  };
  
  
  Blockly.Blocks['turtle_Run_PID'] = {
    init: function() {
      this.appendValueInput("speed_motor")
        .setCheck("Number")
        .appendField("Robot line following (วิ่งตามเส้น)");
      this.appendDummyInput()
        .appendField("%");
      this.appendValueInput("kp")
        .setCheck("Number")
        .appendField("KP:");
      this.appendValueInput("kd")
        .setCheck("Number")
        .appendField("KD:");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1db8cc");
      this.setTooltip("");
    }
  };


};
