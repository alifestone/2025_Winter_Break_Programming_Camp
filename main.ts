input.onButtonPressed(Button.A, function () {
    airplane.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    airplane.change(LedSpriteProperty.X, 1)
})
let bullet: game.LedSprite = null
let enemy: game.LedSprite = null
let airplane: game.LedSprite = null
airplane = game.createSprite(2, 4)
game.setLife(3)
basic.forever(function () {
    enemy = game.createSprite(randint(0, 4), 0)
    while (true) {
        basic.pause(1000)
        enemy.change(LedSpriteProperty.Y, 1)
        if (bullet.isTouching(enemy)) {
            enemy.delete()
            break;
        }
        if (enemy.isTouchingEdge() || airplane.isTouching(enemy)) {
            enemy.delete()
            game.removeLife(1)
            break;
        }
    }
})
basic.forever(function () {
    bullet = game.createSprite(airplane.get(LedSpriteProperty.X), airplane.get(LedSpriteProperty.Y))
    while (true) {
        basic.pause(200)
        bullet.change(LedSpriteProperty.Y, -1)
        if (bullet.isTouchingEdge()) {
            bullet.delete()
            break;
        }
        if (bullet.isTouching(enemy)) {
            bullet.delete()
            break;
        }
    }
})
