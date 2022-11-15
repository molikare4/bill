input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    bitbot.setLedColor(0xFF0000)
    bitbot.ledRotate()
    bitbot.setPixelColor(2, 0x659900)
    bitbot.setPixelColor(8, 0x659900)
})
input.onButtonPressed(Button.B, function () {
    bitbot.move(BBMotor.Both, BBDirection.Reverse, 69)
})
