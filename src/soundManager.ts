import {Howl} from 'howler';
export class SoundManager {
  bg: Howl;
  eatSng: Howl;
  boom: any;
  auch: any;
  foo1: any;
  foo2: any;
  foo3: any;
  foo4: any;
  foo5: any;
  foo6: any;
  foo7: any;
  foo8: any;
  foo9: any;
  foo10: any;
  foo11: any;
  foo12: any;
  foo13: any;
  foo14: any;
  foo15: any;
  foo16: any;
  foo17: any;
  foo18: any;
  foo19: any;
  foo20: any;
  foo21: any;
  foo22: any;

  constructor() {
    this.bg = new Howl({
      src: ['./sound/bg-sound.mp3'],
      loop: true,
      volume: 0.1
    });
    this.eatSng = new Howl({
      src: ['./sound/eat.mp3'],
      volume: 0.5
    });
    this.boom = new Howl({
      src: ['./sound/boom.mp3'],
      loop: false,
      volume: 0.5
    });
    this.auch = new Howl({
      src: ['./sound/auch.mp3'],
      loop: false,
      volume: 0.5
    });

    this.foo1 = new Howl({
      src: ['./sound/1.mp3'],
      loop: false,
      volume: 0.5
    });
    this.foo2 = new Howl({
      src: ['./sound/2.mp3'],
      loop: false,
      volume: 0.5
    });
    this.foo3 = new Howl({
      src: ['./sound/3.mp3'],
      loop: false,
      volume: 0.5
    });
    this.foo4 = new Howl({
      src: ['./sound/4.mp3'],
      loop: false,
      volume: 0.5
    });
    this.foo5 = new Howl({
      src: ['./sound/5.mp3'],
      loop: false,
      volume: 0.5
    });
    this.foo6 = new Howl({
      src: ['./sound/6.mp3'],
      loop: false,
      volume: 0.5
    });
    this.foo7 = new Howl({
      src: ['./sound/7.mp3'],
      loop: false,
      volume: 0.5
    });
    this.foo8 = new Howl({
      src: ['./sound/8.mp3'],
      loop: false,
      volume: 0.5
    });
    this.foo9 = new Howl({
      src: ['./sound/9.mp3'],
      loop: false,
      volume: 0.5
    });
    this.foo10 = new Howl({
      src: ['./sound/10.mp3'],
      loop: false,
      volume: 0.5
    });
    this.foo11 = new Howl({
      src: ['./sound/11.mp3'],
      loop: false,
      volume: 0.5
    });
    this.foo12 = new Howl({
      src: ['./sound/12.mp3'],
      loop: false,
      volume: 0.5
    });
    this.foo13 = new Howl({
      src: ['./sound/13.mp3'],
      loop: false,
      volume: 0.5
    });
    this.foo14 = new Howl({
      src: ['./sound/14.mp3'],
      loop: false,
      volume: 0.5
    });
    this.foo15 = new Howl({
      src: ['./sound/15.mp3'],
      loop: false,
      volume: 0.5
    });
    this.foo16 = new Howl({
      src: ['./sound/16.mp3'],
      loop: false,
      volume: 0.5
    });
    this.foo17 = new Howl({
      src: ['./sound/17.mp3'],
      loop: false,
      volume: 0.5
    });
    this.foo18 = new Howl({
      src: ['./sound/18.mp3'],
      loop: false,
      volume: 0.5
    });
    this.foo19 = new Howl({
      src: ['./sound/19.mp3'],
      loop: false,
      volume: 0.5
    });
    this.foo20 = new Howl({
      src: ['./sound/20.mp3'],
      loop: false,
      volume: 0.5
    });
    this.foo21 = new Howl({
      src: ['./sound/21.mp3'],
      loop: false,
      volume: 0.5
    });
    this.foo22 = new Howl({
      src: ['./sound/22.mp3'],
      loop: false,
      volume: 0.5
    });
  }
  auchPlay() {
    this.auch.play();
  }
  stopBg() {
    if(this.bg) { 
      this.bg.stop();
    }
  }
  muteBg() {
    this.bg.volume(0);
  }
  unMuteBg() {
    this.bg.volume(0.5);
  }
  startBg() {
    if(this.bg) {
      
      this.bg.play();
    }
  }

  eat() {
    if (this.eatSng) {
      this.eatSng.play();
    }
  }
  playKey(key: any) {
    const newLocal: any = this;
    (newLocal[`foo${key}`] as Howl).play();
  }
  playBoom() {
    this.boom.play();
  }
}
