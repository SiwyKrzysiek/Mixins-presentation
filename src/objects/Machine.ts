import p5, { Image } from 'p5';
import { Character } from './Character';

export abstract class Machine extends Character {

  constructor(sketch: p5, position: number, florHeight: number, image: Image | string, size: number) {
    super(sketch, position, florHeight, image, size);
  }

}