import Phaser from 'phaser';

var config = {
  type: Phaser.WEBGL,
  width: 800,
  height: 600,
  scene: {
      preload: preload,
      create: create,
      update: update
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300},
      debug: true
    }
  },
};

var game = new Phaser.Game(config);

function preload () {
  console.log('yes');
  this.load.image('sky', '../assets/sky.png');
  this.load.image('ground', '../assets/platform.png');
  this.load.image('star', '../assets/star.png');
  this.load.image('bomb', '../assets/bomb.png');
  this.load.spritesheet('dude', '../assets/dude.png', { frameWidth: 32, frameHeight: 48 });
}

let platforms;

function create () {
  this.add.image(0, 0, 'sky').setOrigin(0, 0);
  this.add.image(400, 300, 'star').setOrigin(0, 0);

  platforms = this.physics.add.staticGroup();
  platforms.create(400, 568, 'ground').setScale(2).refreshBody();
  platforms.create(600, 400, 'ground');
  platforms.create(50, 250, 'ground');
  platforms.create(750, 220, 'ground');
}

function update ()
{
}