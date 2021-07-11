const dirIcon = Vue.prototype.$global.board.board_info.dir;
module.exports = {
    blocks : [ // use "blocks : [ " in normally situation but this need to override base block from esp-idf platforms
    {
      name: "Basic",
      index: 2,
      color: "230",
      icon: `file:///${dirIcon}/static/icons/robot.png`,
      blocks: [
        
        "button_1_status",
        "sw1_press",
        "analog_read_turtle_robot",
        "analog_read_black_turtle_robot",
        "analog_read_white_turtle_robot",
        "ultrasonic_turtle_robot",
        "turtle_beep",
        'turtle_Robot_setCalibrate',
        'turtle_Readline',
        "turtle_ReadMinValue",
        "turtle_ReadMaxValue",
        "turtle_ReadRefValue",
             
      ],

    },
    {
      name: "Motor",
      index: 3,
      color: "230",
      icon: `file:///${dirIcon}/static/icons/motor.png`,
      blocks: [
      	'turtle_motor_stop_ch',
        {
          xml:
            `<block type="turtle_Motor">
                <value name="speed">
                    <shadow type="math_number">
                         <field name="NUM">50</field>
                    </shadow>
                </value>
            </block>`
        },
        {
            xml : 
            `<block type="turtle_motor_Reduce">
                <value name="speed1">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
                <value name="speed2">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
            </block>`
        },
        {
          xml:
            `<block type="turtle_servo">
                <value name="angle">
                    <shadow type="math_number">
                         <field name="NUM">90</field>
                    </shadow>
                </value>
            </block>`
        },

        { 
            xml : 
            `<block type="turtle_Run_ToCross">
                <value name="speed_motor">
                    <shadow type="math_number">
                        <field name="NUM">50</field>
                    </shadow>
                </value>
                <value name="kp">
                    <shadow type="math_number">
                        <field name="NUM">0.2</field>
                    </shadow>
                </value>
                <value name="kd">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
            </block>`
        },

        { 
            xml : 
            `<block type="turtle_Run_PID_ToWall">
                <value name="speed_motor">
                    <shadow type="math_number">
                        <field name="NUM">50</field>
                    </shadow>
                </value>
                <value name="kp">
                    <shadow type="math_number">
                        <field name="NUM">0.2</field>
                    </shadow>
                </value>
                <value name="kd">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
                <value name="distance_limit">
                    <shadow type="math_number">
                        <field name="NUM">10</field>
                    </shadow>
                </value>
            </block>`
        },
        {
          xml:
            `<block type="turtle_TurnLeft_ToLine">
                <value name="speed">
                    <shadow type="math_number">
                         <field name="NUM">50</field>
                    </shadow>
                </value>
            </block>`
        },
        {
          xml:
            `<block type="turtle_TurnRight_ToLine">
                <value name="speed">
                    <shadow type="math_number">
                         <field name="NUM">50</field>
                    </shadow>
                </value>
            </block>`
        },
        
        { 
            xml : 
            `<block type="turtle_Run_PID">
                <value name="speed_motor">
                    <shadow type="math_number">
                        <field name="NUM">50</field>
                    </shadow>
                </value>
                <value name="kp">
                    <shadow type="math_number">
                        <field name="NUM">0.2</field>
                    </shadow>
                </value>
                <value name="kd">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
            </block>`
        },
                
        
             
      ]
    },
    ]
};