def faireQuelqueChose(image: Image):
    global NewImage
    NewImage = images.create_image("""
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """)
    for X in range(5):
        for Y in range(5):
            if led.point(X, Y):
                NewImage.set_pixel(X, Y, True)
    return NewImage
def cellCountAround(sprite: game.LedSprite):
    if sprite.get(LedSpriteProperty.X) >= 0:
        return 0
    else:
        return 1

def on_button_pressed_a():
    global i
    if i > 0:
        i += -1
        liste[i].show_image(0)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global i
    if i < len(liste) - 1:
        i += 1
        liste[i].show_image(0)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    while True:
        pass
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

liste: List[Image] = []
i = 0
NewImage: Image = None
i = 0
liste = [images.icon_image(IconNames.HEART),
    images.icon_image(IconNames.TARGET),
    images.icon_image(IconNames.GHOST),
    images.icon_image(IconNames.SMALL_HEART)]
liste[i].show_image(0)