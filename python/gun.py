from machine import Pin, I2C

from ssd1306 import SSD1306_I2C

from oled import Write, GFX, SSD1306_I2C

from oled.fonts import ubuntu_mono_15, ubuntu_mono_20

import utime

import network
import urequests
import ujson

wlan = network.WLAN(network.STA_IF)
wlan.active(True)



ssid = 'YOUR_SSID'
password = 'YOUR_PASSWORD'
url = "TOUR_URL"
wlan.connect(ssid, password)



WIDTH =128

HEIGHT= 64

i2c=I2C(0,scl=Pin(17),sda=Pin(16),freq=200000)

oled = SSD1306_I2C(WIDTH,HEIGHT,i2c)

write15 = Write(oled, ubuntu_mono_15)

write20 = Write(oled, ubuntu_mono_20)

while(True):
    oled.fill(0)
    write20.text("Kills", 0, 0)
    try:
        print('GET')
        r = urequests.get(url)
        oled.text(str(r.json()['killCount']), 0, 40)
        r.close()
    except Exception as e:
        print(e)
    utime.sleep(1)
    oled.show()