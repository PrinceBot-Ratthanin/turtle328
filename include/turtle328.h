

#include "Servo.h"
#define _servo1 10
#define _servo2 11
#ifndef ALL
#define ALL 100
#endif
Servo servo1;
Servo servo2;
int motor_reduce_Left = 0;
int motor_reduce_Right = 0;
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
        motor(1, 2,speedA);
        motor(2, 1,speedB);
      }
      break;
    case 6:{                  //SR
        motor(1, 1,speedA);
        motor(2, 2,speedB);
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
  return distance;
}