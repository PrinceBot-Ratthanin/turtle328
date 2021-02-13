#include <Arduino.h>
#include "turtle328.h"
#include <SoftwareSerial.h>

SoftwareSerial mySerial(5, 4); // RX, TX

typedef int Number;
typedef int Boolean;

${EXTINC}

${VARIABLE}

${FUNCTION}

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
  delay(200);
  digitalWrite(2,0);
  
}
void setup()
{

  pinMode(3,OUTPUT);
  pinMode(5,OUTPUT);
  pinMode(6,OUTPUT);
  pinMode(9,OUTPUT);
  pinMode(2,OUTPUT);
  pinMode(4,INPUT);
  motor(1,1,0);
  motor(2,1,0);
  ${SETUP_CODE}
  ${BLOCKSETUP}
}
void loop()
{
  ${LOOP_CODE}
  ${LOOP_EXT_CODE}
}