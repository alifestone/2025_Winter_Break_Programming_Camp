def on_button_pressed_a():
    airplane.change(LedSpriteProperty.X, -1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    airplane.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

bullet: game.LedSprite = None
enemy: game.LedSprite = None
airplane: game.LedSprite = None
airplane = game.create_sprite(2, 4)
life = 3

def on_forever():
    global enemy, life
    enemy = game.create_sprite(randint(0, 4), 0)
    while True:
        basic.pause(1000)
        enemy.change(LedSpriteProperty.Y, 1)
        if enemy.is_touching_edge() or airplane.is_touching(enemy):
            enemy.delete()
            life += -1
            if life <= 0:
                game.game_over()
            break
basic.forever(on_forever)

def on_forever2():
    global bullet
    bullet = game.create_sprite(airplane.get(LedSpriteProperty.X),
        airplane.get(LedSpriteProperty.Y))
    while True:
        basic.pause(200)
        bullet.change(LedSpriteProperty.Y, -1)
        if bullet.get(LedSpriteProperty.Y) == 0:
            bullet.delete()
            break
basic.forever(on_forever2)

def on_forever3():
    global enemy, bullet
    if bullet.is_touching(enemy):
        bullet.delete()
        enemy.delete()
        enemy = game.create_sprite(randint(0, 4), 0)
        bullet = game.create_sprite(airplane.get(LedSpriteProperty.X),
            airplane.get(LedSpriteProperty.Y))
basic.forever(on_forever3)
