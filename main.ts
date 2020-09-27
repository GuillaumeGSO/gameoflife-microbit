input.onButtonPressed(Button.A, function () {
    if (i > 0) {
        i += -1
        image = liste[i]
        image.showImage(0)
    }
})
function compute_next_image () {
    NewImage = images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    for (let X = 0; X <= 4; X++) {
        for (let Y = 0; Y <= 4; Y++) {
            // Juste une inversion pour le moment
            if (led.pointBrightness(X, Y) > 0) {
                NewImage.setPixel(X, Y, false)
            }
        }
    }
    return NewImage
}
input.onButtonPressed(Button.B, function () {
    if (i < liste.length - 1) {
        i += 1
        image = liste[i]
        image.showImage(0)
    }
})
input.onGesture(Gesture.Shake, function () {
    compute_next_image().showImage(0)
})
let image: Image = null
let liste: Image[] = []
let i = 0
let NewImage: Image = null
i = 0
liste = [images.iconImage(IconNames.Heart), images.iconImage(IconNames.Target), images.iconImage(IconNames.Ghost), images.iconImage(IconNames.SmallHeart)]
image = liste[i]
image.showImage(0)
