input.onButtonPressed(Button.A, function () {
    if (i > 0) {
        i += -1
        image = liste[i]
        image.showImage(0)
    }
})
input.onButtonPressed(Button.AB, function () {
    compute_next().showImage(0)
})
input.onButtonPressed(Button.B, function () {
    if (i < liste.length - 1) {
        i += 1
        image = liste[i]
        image.showImage(0)
    }
})
function calc_nb_live_cells (x: number, y: number) {
    Result = 0
    // Verification Nord
    if (y > 0) {
        if (led.pointBrightness(x, y - 1) > 0) {
            Result += 1
        }
        if (x - 1 >= 0 && led.pointBrightness(x - 1, y - 1) > 0) {
            Result += 1
        }
        if (x + 1 < 5 && led.pointBrightness(x + 1, y - 1) > 0) {
            Result += 1
        }
    }
    // Verification Sud
    if (y + 1 < 5) {
        if (led.pointBrightness(x, y + 1) > 0) {
            Result += 1
        }
        if (x - 1 >= 0 && led.pointBrightness(x - 1, y + 1) > 0) {
            Result += 1
        }
        if (x + 1 < 5 && led.pointBrightness(x + 1, y + 1) > 0) {
            Result += 1
        }
    }
    // Vérification Ouest
    if (x - 1 >= 0 && led.pointBrightness(x - 1, y) > 0) {
        Result += 1
    }
    // Vérification Est
    if (x + 1 < 5 && led.pointBrightness(x + 1, y) > 0) {
        Result += 1
    }
    return Result
}
function compute_next () {
    NewImage = images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    for (let X2 = 0; X2 <= 4; X2++) {
        for (let Y2 = 0; Y2 <= 4; Y2++) {
            NbcellAlive = calc_nb_live_cells(X2, Y2)
            if (NbcellAlive < 2) {
                NewImage.setPixel(X2, Y2, false)
continue;
            }
            if (NbcellAlive > 3) {
                NewImage.setPixel(X2, Y2, false)
continue;
            }
            if (led.pointBrightness(X2, Y2) > 0 && (NbcellAlive == 2 || NbcellAlive == 3)) {
                NewImage.setPixel(X2, Y2, true)
continue;
            }
            if (led.pointBrightness(X2, Y2) == 0 && NbcellAlive == 3) {
                NewImage.setPixel(X2, Y2, true)
continue;
            }
        }
    }
    return NewImage
}
let NbcellAlive = 0
let Result = 0
let image: Image = null
let liste: Image[] = []
let i = 0
let NewImage: Image = null
i = 0
liste = [images.createImage(`
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `), images.createImage(`
    . . . . .
    . # # # .
    . # . # .
    . # # # .
    . . . . .
    `), images.createImage(`
    . . . . .
    . . # . .
    . . # . .
    . . # . .
    . . . . .
    `), images.createImage(`
    . . . . .
    . # # # .
    . . # . .
    . . # . .
    . . . . .
    `), images.createImage(`
    . . . . .
    . # . # .
    . . # . .
    . # . # .
    . . . . .
    `)]
image = liste[i]
image.showImage(0)
