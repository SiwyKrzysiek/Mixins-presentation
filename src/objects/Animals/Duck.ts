import p5 from 'p5';
import { Animal } from '..';

export class Duck extends Animal {
  constructor(sketch: p5, position: number, florHeight: number, size = 50) {
    super(sketch, position, florHeight, 'assets/rubber-duck.png', size, 'Kwak!');
  }
}