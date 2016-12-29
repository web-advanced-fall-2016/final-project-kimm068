int sensorValue[5];

int lightPin = 0;
int ledPin = 11;
int ledPin2= 12;
int value;

void setup() {
  Serial.begin(9600);
  pinMode(ledPin,OUTPUT);
  pinMode(ledPin2, OUTPUT);
  pinMode(lightPin, INPUT);
}

void loop(){

  value = analogRead(lightPin);
  
  
  
  Serial.println(value);
//  delay(100);
  
  if(value < 400){
    digitalWrite(ledPin,HIGH);
  } else {
    digitalWrite(ledPin,LOW);
  }


  
  if (Serial.available() > 0) {
//char incoming = Serial.read();
String incoming = Serial.readStringUntil('\n');
Serial.println(incoming);

    if (incoming=="capture"){
  digitalWrite(ledPin2,HIGH);
//  delay(100);
  digitalWrite(ledPin2,LOW);
  }
  } 
}
float microsecondsToCentimeters(long microseconds){
  return (microseconds*0.034029)/2;
}
