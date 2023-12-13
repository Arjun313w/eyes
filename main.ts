input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
    if (input.lightLevel() > 100) {
        for (let index = 0; index < 2; index++) {
            pins.servoWritePin(AnalogPin.P1, 77)
            basic.pause(500)
            pins.servoWritePin(AnalogPin.P1, 0)
            basic.pause(500)
        }
        pins.servoWritePin(AnalogPin.P1, 77)
        for (let index = 0; index < 2; index++) {
            pins.servoWritePin(AnalogPin.P0, 145)
            basic.pause(500)
            pins.servoWritePin(AnalogPin.P0, 35)
            basic.pause(500)
        }
        pins.servoWritePin(AnalogPin.P1, 0)
    } else {
        pins.servoWritePin(AnalogPin.P1, 0)
    }
})
