import p5 from 'p5';
import { FlingMixin } from '../../mixins';
import { Animal } from '..';

class DuckInternal extends Animal {
  constructor(sketch: p5, position: number, florHeight: number, size = 50) {
    super(sketch, position, florHeight, 'assets/rubber-duck.png', size, 'Kwak!');
  }
}

export const Duck = FlingMixin(DuckInternal, 70);