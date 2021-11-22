import p5 from 'p5';

export interface Drawable {
  draw: (sketch: p5) => void;
}
