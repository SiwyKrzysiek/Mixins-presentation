import p5 from 'p5';
import { Animal } from '..';

export class Cow extends Animal {
  constructor(sketch: p5, position: number, florHeight: number, size = 70) {
    super(sketch, position, florHeight, 'assets/cow.png', size, 'Moooo!');
  }
}