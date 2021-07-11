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
  Blockly.Blocks['turtle_Robot_setCalibrate'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Robot setCalibrate (อ่านค่าแสงอัตโนมัติ)");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#ff9f05");
      this.setTooltip("");
    }
  };
  Blockly.Blocks['turtle_Readline'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("ReadLine อ่านตำแหน่งของเส้น");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour("#ff9f05");
   this.setTooltip("get SW1 pressed or not");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks["turtle_ReadMinValue"] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/tcrt5000.png`, 30, 30, { alt: "*", flipRtl: "FALSE" }))
          .appendField(new Blockly.FieldDropdown([
                                              ["Light1", "0"],
                                              ["Light2", "1"],
                                              ["Light3", "2"],
                                              ["Light4", "3"]]), "ch")
          .appendField("MinValue (ค่าน้อยที่สุด)");
      this.setInputsInline(true);
      this.setOutput(true, "Boolean");
      this.setColour("#ff9f05");
   this.setTooltip("read analog value from pin");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks["turtle_ReadMaxValue"] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/tcrt5000.png`, 30, 30, { alt: "*", flipRtl: "FALSE" }))
          .appendField(new Blockly.FieldDropdown([
                                              ["Light1", "0"],
                                              ["Light2", "1"],
                                              ["Light3", "2"],
                                              ["Light4", "3"]]), "ch")
          .appendField("MaxValue (ค่ามากที่สุด)");
      this.setInputsInline(true);
      this.setOutput(true, "Boolean");
      this.setColour("#ff9f05");
   this.setTooltip("read analog value from pin");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks["turtle_ReadRefValue"] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/tcrt5000.png`, 30, 30, { alt: "*", flipRtl: "FALSE" }))
          .appendField(new Blockly.FieldDropdown([
                                              ["Light1", "0"],
                                              ["Light2", "1"],
                                              ["Light3", "2"],
                                              ["Light4", "3"]]), "ch")
          .appendField("RefValue (ค่ากึ่งกลาง)");
      this.setInputsInline(true);
      this.setOutput(true, "Boolean");
      this.setColour("#ff9f05");
   this.setTooltip("read analog value from pin");
   this.setHelpUrl("");
    }
  };
};
