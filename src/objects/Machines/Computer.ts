import p5 from 'p5';
import { Machine } from '..';

export class Computer extends Machine {
  constructor(sketch: p5, position: number, florHeight: number, size = 60) {
    super(sketch, position, florHeight, 'assets/computer.png', size);

    this.realSizeOffset[0] = 10;
    this.realSizeOffset[1] = 10;
  }
}