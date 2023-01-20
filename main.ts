input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showNumber(score)
})
input.onButtonPressed(Button.A, function () {
    if (Basic_Text < list.length) {
        Basic_Text += 1
        basic.showNumber(Basic_Text)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    dot.turn(Direction.Left, 90)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (list[Basic_Text]))
})
input.onButtonPressed(Button.B, function () {
    if (Basic_Text > 0) {
        Basic_Text += -1
        basic.showNumber(Basic_Text)
    }
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        music.playTone(randint(131, 988), music.beat(BeatFraction.Half))
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(randint(131, 988), music.beat(BeatFraction.Double))
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(randint(131, 988), music.beat(BeatFraction.Quarter))
    }
})
input.onGesture(Gesture.TiltRight, function () {
    dot.turn(Direction.Right, 90)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playTone(randint(131, 988), music.beat(BeatFraction.Whole))
})
input.onGesture(Gesture.ThreeG, function () {
    music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
})
let score = 0
let dot: game.LedSprite = null
let Basic_Text = 0
let list: string[] = []
list = [
"Hello",
"What are you doing",
"Nothing",
"Coding",
"Cool",
"Hop on to chess",
"Whats your name",
"Im Dakshin",
"Nice",
"Bell 5 is the best"
]
Basic_Text = 0
dot = game.createSprite(2, 2)
let food = game.createSprite(randint(0, 4), randint(0, 4))
loops.everyInterval(500, function () {
    dot.move(1)
})
basic.forever(function () {
    if (dot.isTouching(food)) {
        food.set(LedSpriteProperty.X, randint(0, 4))
        food.set(LedSpriteProperty.Y, randint(0, 4))
        score += 1
    }
})
