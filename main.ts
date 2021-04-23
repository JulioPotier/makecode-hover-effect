enum ActionKind {
    Walking,
    Idle,
    Jumping,
    goLeft,
    goRight,
    idle,
    goForward,
    hover
}
scene.setBackgroundColor(5)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f . . . . . f f . . . 
    . . . . f f . . . . . f f . . . 
    . . . . f f . . . . . f f . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f . . . . . . . . . . 
    . . . . f f . . . . . . . . . . 
    . . . . f f . . . . . . . . . . 
    . . . . f f . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let hover = animation.createAnimation(ActionKind.hover, 250)
hover.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . b b b b b b b . . . . . . 
    . . . b b b b b b b f . . . . . 
    . . . b b f f f f f b b . . . . 
    . . . b b f . . . . b b f . . . 
    . . . b b f . . . . b b f . . . 
    . . . b b b b b b b . f f . . . 
    . . . b b b b b b b f . . . . . 
    . . . b b f f f f f f . . . . . 
    . . . b b f . . . . . . . . . . 
    . . . b b f . . . . . . . . . . 
    . . . b b f . . . . . . . . . . 
    . . . . f f . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
hover.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 7 7 7 7 7 7 7 . . . . . . 
    . . . 7 7 7 7 7 7 7 f . . . . . 
    . . . 7 7 f f f f f 7 7 . . . . 
    . . . 7 7 f . . . . 7 7 f . . . 
    . . . 7 7 f . . . . 7 7 f . . . 
    . . . 7 7 7 7 7 7 7 . f f . . . 
    . . . 7 7 7 7 7 7 7 f . . . . . 
    . . . 7 7 f f f f f f . . . . . 
    . . . 7 7 f . . . . . . . . . . 
    . . . 7 7 f . . . . . . . . . . 
    . . . 7 7 f . . . . . . . . . . 
    . . . . f f . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
animation.attachAnimation(mySprite, hover)
mySprite.setPosition(15, 15)
let mySprite2 = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 . . . . . . . . . . 2 2 2 
    2 2 2 . . . . . . . . . . 2 2 2 
    2 2 2 . . . . 4 4 . . . . 2 2 2 
    2 2 2 . . . . 4 4 . . . . 2 2 2 
    2 2 2 . . 4 4 . . 4 4 . . 2 2 2 
    2 2 2 . . 4 4 . . 4 4 . . 2 2 2 
    2 2 2 . . . . 4 4 . . . . 2 2 2 
    2 2 2 . . . . 4 4 . . . . 2 2 2 
    2 2 2 . . . . . . . . . . 2 2 2 
    2 2 2 . . . . . . . . . . 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Player)
controller.moveSprite(mySprite2)
game.onUpdate(function () {
    if (mySprite.overlapsWith(mySprite2)) {
        animation.setAction(mySprite, ActionKind.hover)
    } else {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f f . . . . . f f . . . 
            . . . . f f . . . . . f f . . . 
            . . . . f f . . . . . f f . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f f . . . . . . . . . . 
            . . . . f f . . . . . . . . . . 
            . . . . f f . . . . . . . . . . 
            . . . . f f . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
})
