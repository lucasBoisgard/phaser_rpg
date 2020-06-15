var config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 900,
  height: 600,
  physics: {
      default: "arcade",
      arcade: {
          gravity: {
              y: 0
          }
      }
  },
  scene: {
      preload: preload,
      create: create,
      update: update
  }
};
let cursors;
let player;
let showDebug = false;
let solid;
var lastFired = 0;
let spacebar;
let orientation = "face";
var game = new Phaser.Game(config);
var bullets
var boss;
var hsv = Phaser.Display.Color.HSVColorWheel();


function preload() {
  this.load.image('tiles', 'assets/map/tiles/terrain_base.png');
  this.load.image('fireball', 'assets/character/attack/fireball.png');
  this.load.image('boss', 'assets/ennemy/boss.png');
  this.load.tilemapTiledJSON('map', 'assets/map/csv/map2.json');
  this.load.atlas("atlas_attack", "assets/character/attack/castSpell.png", "assets/character/attack/castSpell.json");
  this.load.atlas("atlas_move", "assets/character/move/BODY_male.png", "assets/character/move/sprites1.json");
}

function create() {
  const map = this.make.tilemap({
      key: "map"
  });
  const tileset = map.addTilesetImage("terrain", "tiles");
  const layer0 = map.createStaticLayer("terrain00", tileset, 0, 0);
  const spawnPoint = map.findObject("Objects", obj => obj.name === "spawn");
  solid = map.createStaticLayer("terrain_solid", tileset, 0, 0);

  solid.setCollisionByProperty({
      solid: true
  });
  player = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "atlas_move", "face1")

  spawnBoss(this);
  
  boss.setScale(0.3)
  this.physics.add.collider(player, solid);
  this.physics.add.collider(boss, solid);
//------- Data -------
  this.data.set('max_hp', 100);
  this.data.set('current_hp', 100);
  this.data.set('level', 1);
  this.data.set('current_exp', 0)
  this.data.set('next_level_exp', calculate_exp(this.data.get('level')))
  var text = this.add.text(150, 100, '', {
      font: '10px Arial',
      backgroundColor: 'rgba(102,51,0,0.7)',
      color: 'white',
  });
  text.setText([
      'Niveau: ' + this.data.get('level'),
      'Vie: ' + this.data.get('current_hp') + ' / ' + this.data.get('max_hp'),
      'Exp: ' + this.data.get('current_exp')+ ' / ' + this.data.get('next_level_exp')
  ]);
  text.setScrollFactor (0)
//------- End Data -------

//------- Fireball -------

  var Fireball = new Phaser.Class({

    Extends: Phaser.GameObjects.Image,

    initialize:

    function Bullet (scene)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'fireball');
        this.speed = Phaser.Math.GetSpeed(600, 1);
    },

    fire: function (x, y)
    {
        if (orientation === "back") {
            this.setPosition(x, y - 20);
        }  else if (orientation === "face") {
            this.setPosition(x, y + 20);
        } else if (orientation === "left") {
            this.setPosition(x -20, y);
        }    

        this.setActive(true);
        this.setVisible(true);
    },
    update: function (time, delta)
    {
        if (orientation === "back") {
            this.y -= this.speed * delta;
        } else if (orientation === "face") {
            this.y += this.speed * delta;
        } else if (orientation === "left") {
            this.x -= this.speed * delta;
        } else if (orientation === "right") {
            this.x += this.speed * delta;            
        }
        if (this.y < -50)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }
   
});
bullets = this.add.group({
    classType: Fireball,
    maxSize: 1,
    runChildUpdate: true
});

//------- End Fireball -------


  const anims = this.anims;
  // --- move ---
  anims.create({
      key: "face",
      frames: anims.generateFrameNames("atlas_move", {
          prefix: "face",
          start: 0,
          end: 9,
      }),
      frameRate: 15,
      repeat: -1
  });
  anims.create({
      key: "left",
      frames: anims.generateFrameNames("atlas_move", {
          prefix: "left",
          start: 0,
          end: 9,
      }),
      frameRate: 10,
      repeat: -1
  });
  anims.create({
      key: "right",
      frames: anims.generateFrameNames("atlas_move", {
          prefix: "right",
          start: 0,
          end: 9,
      }),
      frameRate: 10,
      repeat: -1
  });
  anims.create({
      key: "back",
      frames: anims.generateFrameNames("atlas_move", {
          prefix: "back",
          start: 0,
          end: 9,
      }),
      frameRate: 15,
      repeat: -1
  });
  // --- end move ---
//   --- attack ---
  anims.create({
    key: "attack_face",
    frames: anims.generateFrameNames("atlas_attack", {
      prefix: "face",
      start: 0,
      end: 7,
    }),
    frameRate: 10,
    repeat: -1
  });
  anims.create({
    key: "attack_left",
    frames: anims.generateFrameNames("atlas_attack", {
      prefix: "left",
      start: 0,
      end: 7,
    }),
    frameRate: 10,
    repeat: -1
  });
  anims.create({
    key: "attack_right",
    frames: anims.generateFrameNames("atlas_attack", {
      prefix: "right",
      start: 0,
      end: 7,
    }),
    frameRate: 10,
    repeat: -1
  });
  anims.create({
    key: "attack_back",
    frames: anims.generateFrameNames("atlas_attack", {
      prefix: "back",
      start: 0,
      end: 7,
    }),
    frameRate: 15,
    repeat: -1
  });
//   --- end attack ---
  

  const camera = this.cameras.main;
  camera.zoom = 1.5;
  cursors = this.input.keyboard.createCursorKeys();
  camera.startFollow(player);
  camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

  debugGraphics = this.add.graphics();
  map.renderDebug(debugGraphics, {
      tileColor: null,
      collidingTileColor: new Phaser.Display.Color(243, 134, 48, 128),
      faceColor: new Phaser.Display.Color(40, 39, 37, 255)
  });
  debugGraphics.clear();

  this.input.keyboard.on('keydown_C', function(event) {
      showDebug = !showDebug;
      drawDebug();
  });
}

function update(time, delta) {
    if (cursors.space.isDown && time > lastFired) {
        player_lunch_spell(player, time);   
    } else {
        player_move(player);
        
    }
    // console.log(this.physics.collide(bullets, boss, this.testCollide, false, this));
}

function drawDebug() {
  debugGraphics.clear();
  if (showDebug) {
      // Pass in null for any of the style options to disable drawing that component
      solid.renderDebug(debugGraphics, {
          tileColor: null, // Non-colliding tiles
          collidingTileColor: new Phaser.Display.Color(243, 134, 48, 200), // Colliding tiles
          faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Colliding face edges
      });
  }

}


function player_move(player) {
  let speed = 120;
  player.body.setVelocity(0);

  if (cursors.left.isDown) {
      player.body.setVelocityX(-speed);
  } else if (cursors.right.isDown) {
      player.body.setVelocityX(speed);
  }
  if (cursors.up.isDown) {
      player.body.setVelocityY(-speed);
  } else if (cursors.down.isDown) {
      player.body.setVelocityY(speed);
  }
  // Running
  if (cursors.shift.isDown) {
      speed += 100
  } else {
      speed = 120
  }
  player.body.velocity.normalize().scale(speed);

  if (cursors.left.isDown) {
      player.anims.play("left", true);
      orientation = "left";
  } else if (cursors.right.isDown) {
      player.anims.play("right", true);
      orientation = "right";
  } else if (cursors.up.isDown) {
      player.anims.play("back", true);
      orientation = "back";
  } else if (cursors.down.isDown) {
      player.anims.play("face", true);
      orientation = "face";
  } else {
      player.anims.stop();
  }
}

function player_lunch_spell(player, time) {
    player.anims.play("attack_" + orientation, true);

    if (player.anims.currentFrame.index === 6) {
        var bullet = bullets.get();
        if (bullet)
        {
            bullet.fire(player.x, player.y);
            lastFired = time + 50;
            setTimeout(() => {bullet.destroy()}, 1000)    
        }   
    }
}

function calculate_exp(level) {
    var baseExp = 50;
    var res = 50;
    for (var i = 1; i < level; i++) {
        baseExp *= 1.70
        res = baseExp;
    }
    return Math.round(res);
}

function spawnBoss(context) {
    boss = context.physics.add.image(
        Phaser.Math.RND.between(0, context.physics.world.bounds.width-200), 
        Phaser.Math.RND.between(0, context.physics.world.bounds.height-100), 
        "boss"
    );
}