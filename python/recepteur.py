from machine import Pin
import utime
import network
import urequests
import ujson

ir=Pin(21,Pin.IN)
sondPin=Pin(15,Pin.OUT)

wlan = network.WLAN(network.STA_IF)
wlan.active(True)

ssid = 'not4uSry'
password = 'bbac64ffa50f'
wlan.connect(ssid, password)
while not wlan.isconnected(): pass
url = "http://192.168.41.46:3000/kill"

while True:
    try:
        print("--------------------------")
        print(ir.value())
        utime.sleep_ms(100)
        if(ir.value() == 0):
            print("yes")
            sondPin.value(1)
            try:
                print('GET')
                r = urequests.get(url)
                r.close()
            except Exception as e:
                print(e)
        else:
            sondPin.value(0)
        
    except KeyboardInterrupt:
        break