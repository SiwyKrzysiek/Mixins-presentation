import { FlingMixin } from '../../mixins';
import p5 from 'p5';
import { Machine } from '..';

class PlaneInternal extends Machine {
  constructor(sketch: p5, position: number, florHeight: number, size = 150) {
    super(sketch, position, florHeight, 'assets/plane.png', size);

    this.realSizeOffset[0] = 60;
    this.realSizeOffset[1] = -50;
  }
}

export const Plane = FlingMixin(PlaneInternal, 150)