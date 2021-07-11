

#include "Servo.h"
#include <EEPROM.h>
#define _servo1 10
#define _servo2 11
#ifndef ALL
#define ALL 100
#endif
Servo servo1;
Servo servo2;
int motor_reduce_Left = 0;
int motor_reduce_Right = 0;

int * _sensorPins = NULL;
int * _min_sensor_values = NULL;
int * _max_sensor_values = NULL;
int  _NumofSensor = 0;
int _Sensitive  = 300;

uint16_t state_on_Line = 0;
uint32_t _lastPosition;
float Kp = 1;
float Ki = 0;
float Kd = 0;
float previous_error ;

void motor_reduce(int M_Left,int M_Right){
  motor_reduce_Left = M_Left;
  motor_reduce_Right = M_Right;
}
void beep(){
  pinMode(2,OUTPUT);
  digitalWrite(2,HIGH);
  delay(200);
  digitalWrite(2,LOW);
}
void servo(uint8_t servo, int16_t angle)
{
  if (servo == 1)
  {
    if (angle == -1)
    {
      servo1.detach();
    }
    else
    {
      if (!(servo1.attached()))
      {
        servo1.attach(_servo1);
      }
      servo1.write(angle);
    }
  }
  if (servo == 2)
  {
    if (angle == -1)
    {
      servo2.detach();
    }
    else
    {
      if (!(servo2.attached()))
      {
        servo2.attach(_servo2);
      }
      servo2.write(angle);
    }
  }
}
void motor(int pin,int _direction, int _Speeds) {
  int _SpeedsA;
  int _SpeedsB;
  if (pin == 1) {
    _SpeedsA = abs(_Speeds - motor_reduce_Right) ;
    _SpeedsA = (_SpeedsA  * 2.55 ) ;
    if (_SpeedsA > 255){_SpeedsA = 255;}
    else if (_SpeedsA < -255){_SpeedsA = -255;}
    if (_direction == 1) {
      analogWrite(5, 255 - abs(_SpeedsA));
      analogWrite(3, 255);
    }
    else if (_direction ==2 ) {
      analogWrite(5, 255);
      analogWrite(3, 255 - abs(_SpeedsA));
    }
  }
  if (pin == 2) {
    _SpeedsB = abs(_Speeds - motor_reduce_Left) ;
    
    _SpeedsB = (_SpeedsB * 2.55) ;
    if (_SpeedsB > 255){_SpeedsB = 255;}
    else if (_SpeedsB < -255){_SpeedsB = -255;}
    if (_direction == 1) {
      analogWrite(9, 255 - abs(_SpeedsB));
      analogWrite(6, 255);
    }
    else if (_direction == 2) {
      analogWrite(9, 255);
      analogWrite(6, 255 - abs(_SpeedsB));
    }
  }
}
void motor(int _ch,int _speed){
	if(_ch == 1){
		if(_speed >=0 ){motor(1, 1,_speed);}
		else{motor(1, 2,abs(_speed));}
	}
	else if(_ch == 2){
		if(_speed >=0 ){motor(2, 1,_speed);}
		else{motor(2, 2,abs(_speed));}
	}
}
void motor_action(int action,int speedA,int speedB){
  switch(action){
    
    case 1:{                  //forward
        motor(1, 1,speedA);
        motor(2, 1,speedB);
      }
      break;
    case 2:{                  //backward
        motor(1, 2,speedA);
        motor(2, 2,speedB);
      }
      break;
    case 3:{                  //TL
        motor(1, 1,speedA);
        motor(2, 1,0);
      }
      break;
    case 4:{                  //TR
        motor(1, 1,0);
        motor(2, 1,speedB);
      }
      break;
    case 5:{                  //SL
        motor(1, 1,speedA);
        motor(2, 2,speedB);
      }
      break;
    case 6:{                  //SR
        motor(1, 2,speedA);
        motor(2, 1,speedB);
      }
      break;
    
  }
}
unsigned int read_distance(){
  pinMode(12, INPUT);
  pinMode(13, OUTPUT);
  long duration = 0;
  long distance = 0;
  digitalWrite(13, LOW);
  delayMicroseconds(2);
  digitalWrite(13, HIGH);
  delayMicroseconds(10);
  digitalWrite(13, LOW);
  duration = pulseIn(12, 1, 15000);
  distance = (duration / 2) / 29;
  if(distance == 0 ){distance = 200;}
  return distance;
}
void SW1_press(){
	pinMode(4,INPUT);
	pinMode(2,OUTPUT);
  motor(1,1,0);
  motor(2,1,0);
  while(digitalRead(4) == 1){
  digitalWrite(2,1);
  delay(10);
  digitalWrite(2,0);
  delay(500);
  }
  digitalWrite(2,1);
  delay(500);
  digitalWrite(2,0);
  delay(1000);
  
}
/*
  EEPROM
  address   Value
  0-1				min sensor 0
  2-3			min sensor 1
  4-5			min sensor 2
  6-7			min sensor 3

  8-9			max sensor 0
  10-11			max sensor 1
  12-13			max sensor 2
  14-15			max sensor 3

*/
void ReadSensor_fromEEPROM(){
	_min_sensor_values[0] = EEPROM.read(0)+(EEPROM.read(1)*256);
	_min_sensor_values[1] = EEPROM.read(2)+(EEPROM.read(3)*256);
	_min_sensor_values[2] = EEPROM.read(4)+(EEPROM.read(5)*256);
	_min_sensor_values[3] = EEPROM.read(6)+(EEPROM.read(7)*256);


	_max_sensor_values[0] = EEPROM.read(8)+(EEPROM.read(9)*256);
	_max_sensor_values[1] = EEPROM.read(10)+(EEPROM.read(11)*256);
	_max_sensor_values[2] = EEPROM.read(12)+(EEPROM.read(13)*256);
	_max_sensor_values[3] = EEPROM.read(14)+(EEPROM.read(15)*256);

}
void SetSensor_ToEEPROM(){
	EEPROM.write(0, _min_sensor_values[0]);
	EEPROM.write(1, _min_sensor_values[0]>>8);
	EEPROM.write(2, _min_sensor_values[1]);
	EEPROM.write(3, _min_sensor_values[1]>>8);
	EEPROM.write(4, _min_sensor_values[2]);
	EEPROM.write(5, _min_sensor_values[2]>>8);
	EEPROM.write(6, _min_sensor_values[3]);
	EEPROM.write(7, _min_sensor_values[3]>>8);

	EEPROM.write(8, _max_sensor_values[0]);
	EEPROM.write(9, _max_sensor_values[0]>>8);
	EEPROM.write(10, _max_sensor_values[1]);
	EEPROM.write(11, _max_sensor_values[1]>>8);
	EEPROM.write(12, _max_sensor_values[2]);
	EEPROM.write(13, _max_sensor_values[2]>>8);
	EEPROM.write(14, _max_sensor_values[3]);
	EEPROM.write(15, _max_sensor_values[3]>>8);
}
void setSensorPins(const int * _pins, int _NumofSensor_)
{
  _NumofSensor = _NumofSensor_;
  _sensorPins = (int *)realloc(_sensorPins, sizeof(int) * _NumofSensor_);
  _min_sensor_values = (int *)realloc(_min_sensor_values, sizeof(int) * _NumofSensor_);
  _max_sensor_values = (int *)realloc(_max_sensor_values, sizeof(int) * _NumofSensor_);
  for (uint8_t i = 0; i < _NumofSensor_; i++)
  {
    _sensorPins[i] = _pins[i];
    _min_sensor_values[i] = 1023;
    _max_sensor_values[i] = 0;
  }
  
}
void setSensorMin(const uint16_t * _MinSensor)
{
  for (uint8_t i = 0; i < _NumofSensor; i++)
  {
    _min_sensor_values[i] = _MinSensor[i];
  }
}
void setSensorMax(const uint16_t * _MaxSensor)
{
  for (uint8_t i = 0; i < _NumofSensor; i++)
  {
    _max_sensor_values[i] = _MaxSensor[i];
  }
}
void setSensitive(const uint16_t  _SensorSensitive)
{
    _Sensitive = _SensorSensitive;
}
void setCalibrate(){

  for (uint8_t i = 0; i < _NumofSensor; i++)
  {
    if(analogRead(_sensorPins[i]) > _max_sensor_values[i] || _max_sensor_values[i] > 1023 ){
      _max_sensor_values[i]  = analogRead(_sensorPins[i]);
      if(_max_sensor_values[i] > 1023 )_max_sensor_values[i] = 1023;
    }
  }
  for (uint8_t i = 0; i < _NumofSensor; i++)
  {
    if(analogRead(_sensorPins[i]) < _min_sensor_values[i] || _min_sensor_values[i] == 0){
      _min_sensor_values[i] = analogRead(_sensorPins[i]);
      if(_min_sensor_values[i] < 0) _min_sensor_values[i] = 0;
    }
  }
    
}
void Robot_setCalibrate(){
	for(int i =0;i<300;i++){
      setCalibrate();
      motor(1, 1, 50);
  	  motor(2, 2, 50);
      delay(1);
    }
    motor(1,1,0);motor(2,1,0);delay(100);
    for(int i =0;i<600;i++){
      setCalibrate();
      motor(1, 2, 50);
  	  motor(2, 1, 50);
      delay(1);
    }
    motor(1,1,0);motor(2,1,0);delay(100);
    for(int i =0;i<300;i++){
      setCalibrate();
      motor(1, 1, 50);
  	  motor(2, 2, 50);
      delay(1);
    }
    motor(1,1,0);motor(2,1,0);delay(200);
    SetSensor_ToEEPROM();
}

int ReadSensorMinValue(uint8_t _Pin){
    return _min_sensor_values[_Pin];
}
int ReadSensorMaxValue(uint8_t _Pin){
    return _max_sensor_values[_Pin];
}
int ReadSensorRefValue(uint8_t _Pin){
	return (_max_sensor_values[_Pin]+_min_sensor_values[_Pin])/2;
}
int readline()   {                
  bool onLine = false;
  long avg = 0;
  long sum = 0;
  for (uint8_t i = 0; i < _NumofSensor; i++) 
  {
    long value = map(analogRead(_sensorPins[i]), _min_sensor_values[i], _max_sensor_values[i], 100, 0);                                                                            // จากนั้นก็เก็บเข้าไปยังตัวแป value
    if (value > 20) {
      onLine = true;
    }
    if (value > 5)
    {
      avg += (long)value * (i * 100);
      sum += value;                          
    }
  }
  if (!onLine)
  {
    if (_lastPosition < 100){return 0;}
    else if(_lastPosition >= 100 && _lastPosition <= 200){return 150;}
    else {return 300;}
  }
  _lastPosition = avg / sum;
  return _lastPosition; 
}
void Run_PID(int speed_motor,float kp,float kd){
  uint16_t setpoint = 150;
  int present_position = readline();
  int errors = setpoint - present_position;
  float output;
  float derivative ;
    int speed_max = speed_motor;
    derivative = (errors - previous_error) ;
    output = kp * errors + kd * derivative;
    int max_output = 100;
    if (output > max_output )output = max_output;
    else if (output < -max_output)output = -max_output;
    motor(1,speed_max - output);
    motor(2,speed_max + output);
    delay(1);
    previous_error = errors;
}
void Run_ToLine(int speed_motor,float kp,float kd){
	do{
		Run_PID(speed_motor,kp,kd);
	}
	while(analogRead(17)>ReadSensorRefValue(0) || analogRead(14)>ReadSensorRefValue(3));
	motor(1,1,50);motor(2,1,50);delay(300);motor(1,1,0);motor(2,1,0);

}
void Run_ToWall(int speed_motor,float kp,float kd,int _distance_limit){
  do{
    Run_PID(speed_motor,kp,kd);
  }
  while(read_distance() > _distance_limit);
  motor(1,1,0);motor(2,1,0);

}
void TurnLeft_ToLine(int speed_motor){
	motor(2,2,speed_motor);motor(1,1,speed_motor);
	delay(250);
	while(analogRead(15)>ReadSensorRefValue(2)){
		motor(2,2,speed_motor-10);motor(1,1,speed_motor-10);
	}
	motor(1,1,0);motor(2,1,0);
}
void TurnRight_ToLine(int speed_motor){
	motor(2,1,speed_motor);motor(1,2,speed_motor);
	delay(250);
	while(analogRead(16)>ReadSensorRefValue(1)){
		motor(2,1,speed_motor-10);motor(1,2,speed_motor-10);
	}
	motor(1,1,0);motor(2,1,0);
}

