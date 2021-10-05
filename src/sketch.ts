import p5 from 'p5';

const s = (sketch: p5) => {
  sketch.setup = () => {
    const canvas = sketch.createCanvas(500, 500);
    canvas.parent('canvas-container');
  };

  sketch.draw = () => {
    sketch.line(50, sketch.height / 2, sketch.width - 50, sketch.height / 2);
  };
};

export default new p5(s);
