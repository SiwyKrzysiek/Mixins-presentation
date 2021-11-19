import { Character, Thing, Animal, canBeClicked } from './objects';
import p5 from 'p5';

const s = (sketch: p5) => {
  const canvasSize = [800, 450] as const;

  const florHeight = canvasSize[1] * 0.85;

  const objects: Thing[] = [];

  sketch.setup = () => {
    const canvas = sketch.createCanvas(...canvasSize);
    canvas.parent('canvas-container');

    const duck = new Animal(sketch, 60, florHeight, 'assets/rubber-duck.png');
    objects.push(duck);
  };

  sketch.draw = () => {
    drawBackground();

    // const duck = new Character(60, 1, '/assets/rubber-duck.png');
    // duck.draw(sketch, florHeight);
    for (const object of objects) {
      object.draw(sketch, florHeight);
    }
  };

  sketch.mousePressed = (e: MouseEvent) => {
    for (const object of objects) {
      if (canBeClicked(object)) {
        object.click(e.clientX, e.clientY)
      }
    }
  }

  const drawBackground = () => {
    const florMargin = 50;

    sketch.line(florMargin, florHeight, sketch.width - florMargin, florHeight);
  }
};

export default new p5(s);
