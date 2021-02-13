const dirIcon = Vue.prototype.$global.board.board_info.dir;
const app = require("electron").remote;
const nativeImage = require("electron").nativeImage;
const dialog = app.dialog;


module.exports = function(Blockly) {
  "use strict";

  
  Blockly.Blocks["analog_read_turtle_robot"] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/tcrt5000.png`, 30, 30, { alt: "*", flipRtl: "FALSE" }))
          .appendField("Light (จับเส้น)")
          .appendField(new Blockly.FieldDropdown([
                                              ["Light1", "17"],
                                              ["Light2", "16"],
                                              ["Light3", "15"],
                                              ["Light4", "14"]]), "pin");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour("#ff9f05");
   this.setTooltip("read analog value from pin");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks["analog_read_black_turtle_robot"] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/tcrt5000.png`, 30, 30, { alt: "*", flipRtl: "FALSE" }))
          .appendField(new Blockly.FieldDropdown([
                                              ["Light1", "17"],
                                              ["Light2", "16"],
                                              ["Light3", "15"],
                                              ["Light4", "14"]]), "pin")
          .appendField("เจอเส้นสีดำ");
          
      this.setInputsInline(true);
      this.setOutput(true, "Boolean");
      this.setColour("#ff9f05");
   this.setTooltip("read analog value from pin");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks["analog_read_white_turtle_robot"] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/tcrt5000.png`, 30, 30, { alt: "*", flipRtl: "FALSE" }))
          .appendField(new Blockly.FieldDropdown([
                                              ["Light1", "17"],
                                              ["Light2", "16"],
                                              ["Light3", "15"],
                                              ["Light4", "14"]]), "pin")
          .appendField("เจอพื้นสีขาว");
          
      this.setInputsInline(true);
      this.setOutput(true, "Boolean");
      this.setColour("#ff9f05");
   this.setTooltip("read analog value from pin");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks["ultrasonic_turtle_robot"] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/Ultrasonic.png`, 30, 30, { alt: "*", flipRtl: "FALSE" }))
          .appendField("Read Distance (วัดระยะทาง)")
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour("#ff9f05");
   this.setTooltip("read distance from ultrasonic");
   this.setHelpUrl("");
    }
  };
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
      this.setColour("#ff9f05");
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
      this.setColour("#ff9f05");
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
      this.setColour("#ff9f05");
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
      this.setColour("#ff9f05");
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
      this.setColour("#ff9f05");
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
      this.setColour("#ff9f05");
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
      this.setColour("#ff9f05");
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
      this.setColour("#ff9f05");
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
      this.setColour("#ff9f05");
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
      this.setColour("#ff9f05");
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
      this.setColour("#ff9f05");
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
      this.setColour("#ff9f05");
      this.setTooltip("");
    }
  };
  Blockly.Blocks['button_1_status'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("/static/icons/sw12x12.png", 20, 20, "*"))
          .appendField("SW1 is pressed(ปุ่มกด)");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour("#ff9f05");
   this.setTooltip("get SW1 pressed or not");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['sw1_press'] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/static/icons/sw12x12.png", 20, 20, "*"))
        .appendField("Wait SW1 is pressed (รอจนกว่าจะกดสวิทช์)")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#ff9f05");
      this.setTooltip("");
    }
  };
  Blockly.Blocks['turtle_beep'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Buzzer status(ลำโพง)")
        .appendField(new Blockly.FieldDropdown([["beep","3"], ["On","1"], ["Off","2"]]), "ch")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#ff9f05");
      this.setTooltip("");
    }
  };


};
