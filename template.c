#include <Arduino.h>
#include "turtle328.h"
#include <SoftwareSerial.h>


SoftwareSerial mySerial(5, 4); // RX, TX

typedef int Number;
typedef int Boolean;

${EXTINC}

${VARIABLE}

${FUNCTION}


void setup()
{
  Serial.begin(115200);
  setSensorPins((const int[]){17, 16, 15 , 14}, 4);
  Serial.println("Let go");
  ReadSensor_fromEEPROM();
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