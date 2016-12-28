# import time
# import picamera

# with picamera.PiCamera() as camera:
#     camera.start_preview()
#     camera.start_recording('data/video.h264')
#     time.sleep(30)
#     camera.stop_recording()
#     camera.stop_preview()



# import picamera
# from time import sleep

# camera = picamera.PiCamera()
# camera.resolution = (1024, 768)
# camera.capture('image.jpg')

# camera.start_preview()
# camera.vflip = True
# camera.hflip = True
# camera.brightness = 60




# camera.start_recording('video.h264')
# sleep(5)
# camera.stop_recording()




# time and date  http://pinkwink.kr/854s
import picamera
import datetime as dt
from time import sleep

with picamera.PiCamera() as camera:
    camera.resolution = (864, 648)
    camera.brightness = 60
    camera.contrast = 50
    # camera.image_effect = 'film'
    camera.awb_mode = 'sunlight'
    # camera.rotation = 180
    camera.framerate = 15
    camera.start_preview()
    camera.annotate_background = picamera.Color('black')
    camera.annotate_text_size = 50
    camera.annotate_text = dt.datetime.now().strftime('%Y-%m-%d %H:%M:%S')

    start = dt.datetime.now()

    while (dt.datetime.now() - start).seconds < 3:
        camera.annotate_text = dt.datetime.now().strftime('%Y-%m-%d %H:%M:%S')


    # camera.capture('image4.jpg')
    # name in range = https://neosarchizo.gitbooks.io/raspberrypiforsejonguniv/content/chapter4.html

    # for i in range(25):
       # sleep(2)
       # camera.capture('public/data/image%s.jpg' % i)
    camera.capture('public/data/image' + camera.annotate_text +'.jpg')
    

       # date on the name = http://stackoverflow.com/questions/6327498/python-pil-save-file-with-datetime-as-name
       # camera.capture('data/image' + camera.annotate_text +'.jpg')



# control with button
# http://www.hardcopyworld.com/gnuboard5/bbs/board.php?bo_table=lecture_rpi&wr_id=11
# import time
# import picamera
# import RPi.GPIO as GPIO  # new

# GPIO.setmode(GPIO.BCM)  # new
# GPIO.setup(17, GPIO.IN, GPIO.PUD_UP)  # new

# with picamera.PiCamera() as camera:
#     camera.start_preview()
#     GPIO.wait_for_edge(17, GPIO.FALLING)  # new
#     camera.capture('/home/pi/Desktop/image.jpg')
#     camera.stop_preview()