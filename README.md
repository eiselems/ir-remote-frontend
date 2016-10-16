# ir-remote-frontend

This project is a simple proof-of-concept for providing access to the IR Commands provided by a RaspberryPi running lirc via a web frontend.

The "backend" is the commandline of the RaspberryPi which provides access to the mapped keys by executing
```
irsend SEND_ONCE name-of-remote KEY
e.g. irsend SEND_ONCE remote-media KEY_PAUSE
```

This project requires an already installed and configured lirc.
