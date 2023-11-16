input.onButtonPressed(Button.A, function () {
	
})
input.onGesture(Gesture.TiltLeft, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
input.onGesture(Gesture.TiltRight, function () {
	
})
basic.forever(function () {
    for (let index = 0; index < 2; index++) {
        pins.servoWritePin(AnalogPin.P1, 77)
        basic.pause(500)
        pins.servoWritePin(AnalogPin.P1, 20)
        basic.pause(500)
    }
    pins.servoWritePin(AnalogPin.P1, 77)
    for (let index = 0; index < 2; index++) {
        pins.servoWritePin(AnalogPin.P0, 145)
        basic.pause(500)
        pins.servoWritePin(AnalogPin.P0, 35)
        basic.pause(500)
    }
    pins.servoWritePin(AnalogPin.P1, 20)
})
