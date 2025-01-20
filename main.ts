input.onButtonPressed(Button.A, function () {
    airplane.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    airplane.change(LedSpriteProperty.X, 1)
})
let airplane: game.LedSprite = null
airplane = game.createSprite(2, 4)
let life = 3
let enemy = game.createSprite(randint(0, 4), 0)
let bullet = game.createSprite(airplane.get(LedSpriteProperty.X), airplane.get(LedSpriteProperty.Y))
basic.forever(function () {
    basic.pause(1000)
    if (enemy.get(LedSpriteProperty.Y) >= 4) {
        enemy.delete()
        life += -1
        enemy = game.createSprite(randint(0, 4), 0)
    } else {
        enemy.change(LedSpriteProperty.Y, 1)
    }
})
basic.forever(function () {
    if (bullet.isTouching(enemy)) {
        bullet.delete()
        enemy.delete()
        enemy = game.createSprite(randint(0, 4), 0)
        bullet = game.createSprite(airplane.get(LedSpriteProperty.X), airplane.get(LedSpriteProperty.Y))
    }
    if (airplane.isTouching(enemy)) {
        enemy.delete()
        life += -1
        enemy = game.createSprite(randint(0, 4), 0)
    }
    if (life <= 0) {
        game.gameOver()
    }
})
basic.forever(function () {
    basic.pause(200)
    if (bullet.get(LedSpriteProperty.Y) <= 0) {
        bullet.delete()
        bullet = game.createSprite(airplane.get(LedSpriteProperty.X), airplane.get(LedSpriteProperty.Y))
    } else {
        bullet.change(LedSpriteProperty.Y, -1)
    }
})
