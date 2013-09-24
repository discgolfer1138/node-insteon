// Example 1: Raw Serialport Insteon Parser

var insteon = require('.././insteon'),
	SerialPort = require('serialport').SerialPort,
	port = '/dev/cu.usbserial-A900ex8n',
	sp = new SerialPort(port, {
		baudrate: 19200,
		databits: 8,
		stopbits: 1,
		parity: 'none',
		flowcontrol: false,
		buffersize: 255,
		parser: insteon.parser()
	});

sp.on('data', function(data) {
	console.log(data);
});

var getversion = new Buffer([0x02, 0x60]);
sp.write(getversion);
