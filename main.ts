input.onButtonPressed(Button.A, function () {
    if (startfist == 0) {
        music.playTone(988, music.beat(BeatFraction.Breve))
        music.playTone(988, music.beat(BeatFraction.Breve))
        music.playTone(988, music.beat(BeatFraction.Breve))
    } else {
        music.playTone(988, music.beat(BeatFraction.Whole))
    }
    music.playMelody("E B C5 A B G A F ", 40)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . . . .
        # . . . #
        . # # # .
        `)
    startfist = 1
})
input.onGesture(Gesture.ScreenUp, function () {
    up = 1
    basic.showString("You Scuk")
})
input.onGesture(Gesture.ScreenDown, function () {
    up = 0
    while (up == 0) {
        music.playTone(988, music.beat(BeatFraction.Breve))
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . # . # .
        # . . . #
        . # # # .
        `)
    music.playMelody("C5 C5 A A C B B C5 ", 500)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("C5 G B A F A C5 B ", 120)
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.Shake, function () {
    music.playMelody("C5 A B G A F G E ", 120)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . . . .
        . # # # .
        # . . . #
        `)
})
let up = 0
let startfist = 0
startfist = 0
basic.showString("Hello!")
basic.showLeds(`
    . # # # .
    # # # # #
    # # # # #
    # # # # #
    . # # # .
    `)
music.playMelody("C5 C C5 C C5 C C5 C ", 120)
