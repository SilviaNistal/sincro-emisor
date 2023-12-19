radio.setGroup(1)
let A = 0
let B = 0
let AB = 0
let Touch = 0
let Stop = 1
basic.forever(function () {
    if (A == 1) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        radio.sendString("izquierda")
    }
    if (AB == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        radio.sendString("avanza")
    }
    if (B == 1) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        radio.sendString("derecha")
    }
    if (Touch == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        radio.sendString("retroceso")
    }
    if (A == 0 && (B == 0 && (AB == 0 && Touch == 0))) {
        Stop = 1
    } else {
        Stop = 0
    }
    if (Stop == 1) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        radio.sendString("stop")
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && !(input.buttonIsPressed(Button.B))) {
        A = 1
        B = 0
        AB = 0
        Touch = 0
        Stop = 0
    } else {
        A = 0
    }
})
basic.forever(function () {
    if (input.logoIsPressed()) {
        A = 0
        B = 0
        AB = 0
        Touch = 1
        Stop = 0
    } else {
        Touch = 0
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        A = 0
        B = 0
        AB = 1
        Touch = 0
        Stop = 0
    } else {
        AB = 0
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B) && !(input.buttonIsPressed(Button.A))) {
        A = 0
        B = 1
        AB = 0
        Touch = 0
        Stop = 0
    } else {
        B = 0
    }
})
