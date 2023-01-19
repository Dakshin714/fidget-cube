input.onButtonPressed(Button.A, function () {
    if (Basic_Text < list.length) {
        Basic_Text += 1
    }
})
input.onGesture(Gesture.LogoUp, function () {
    dot.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltLeft, function () {
    dot.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (list[Basic_Text]))
})
input.onButtonPressed(Button.B, function () {
    if (Basic_Text > 0) {
        Basic_Text += -1
    }
})
input.onGesture(Gesture.TiltRight, function () {
    dot.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.LogoDown, function () {
    dot.change(LedSpriteProperty.Y, -1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playTone(randint(131, 988), music.beat(BeatFraction.Whole))
})
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
