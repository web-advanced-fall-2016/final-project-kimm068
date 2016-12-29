# Final Assignment

**"A Digital Memory" is a wearable device + online platform that depicts a future where we no longer need to memorize anything due to technology**

![alt text](/screenshot/1.png?raw=true)


Today we are exposed to the internet and it has become less necessary for us to memorize everything. We don’t try to absorb information like before because we don’t have to worry about losing information anymore. So for my project I want to criticize how the internet has become our primary external storage system. Maybe in the future, we no longer need to memorize anything since the internet does everything.

I am using a camera sensor to capture whatever I want to save or remember, and those photos will automatically upload to the web server that becomes a personal digital memory. 




**Tools used:**
- RaspberryPi 
- Camera sensor
- Arduino
- Photo Resistor
- LED




​
​



**Files to check:**

1. app.js (server)

2. **Arduino Folder** - photoSensor.ino 

3. videoCam.py (activates a pi camera)

4. **Public folder** - index.html, main.js, style.css


​
​



**How it works:**

When you see something that you want to remember, you can simply cover the photo sensor on the glove to activate a camera on the helmet. Once the photo is taken, all the photos will be saved locally in the folder in your raspberry pi and list it on the web server in real time. 
​
​

![alt text](/screenshot/3.png?raw=true)



​
​



### How to run the app:


![alt text](/screenshot/2.png?raw=true)


​
​




##### Setup the Arduino

1. Open the photoSensor.ino file from the Arduino folder. Setup LEDs and a photo resistor using pins as below.

   int lightPin = 0;   
   int ledPin = 11;
   int ledPin2= 12;

2. Upload a file to the Arduino and unplug it from the computer, and plug it to Raspberry Pi. 

3. The port I used is  `/dev/ttyACM0`.

   ​
​
   

##### Setup & Run the Server

Before trying to run the code, you must download the following dependencies from NPM using the `npm -install`command.

- serialport
- socket.io
- express
- bodyParser
- python-shell
- fs

​




**Follow the steps below after all dependencies have been installed.**

1. run node app.js
2. trigger a photo sensor on the glove (connected to arduino)
3. Start the server on `localhost:8070`.
4. check the current photos ( or memories) on the web server.


​




### Client/Server Interaction
​
​

**(Server)**

Server uses a file system to collect all the images on the local folder and send it to the client side.
The server communicates with an Arduino using serial communication. When the photo sensor is triggered, the arduino sends a data to the server and the server run the python script that captures a photo.
When the user leaves a comment on the website, the server receives a data and sends it back to arduino.

​
​

**Socket Endpoints**

| URL          | Description                              | method |
| ------------ | ---------------------------------------- | ------ |
| `connection` | Connects socket and console out the result. | ON     |
| `error`      | Open errors will be emitted as an error event | ON     |
| `toArduino`  | Receive a data from the client side to Arduino | ON     |
| `numOfImgs`  | Send all the images on the local folder to the client side. | EMIT   |



​

**(Client)**

The client receives all the images from the server and display them on the web interface.
When the user leaves a comment on the website, send a data to arduino side and turn the LED on to alert that there is a new comment. 

