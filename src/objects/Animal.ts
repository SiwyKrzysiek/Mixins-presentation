import p5, { Image } from 'p5';
import { Clickable, ClickableMixin } from '.';
import { Character } from './Character';

class InternalAnimal extends Character implements Clickable {
  constructor(sketch: p5, position: number, florHeight: number, image: Image | string, size = 90) {
    super(sketch, position, florHeight, image, size);
  }

  clickedInside = (x: number, y: number) => {
    return x >= this.position && x <= this.position + this.size
      && y >= this.y && y <= this.y + this.size
  };
  onClick = () => console.log('Moooo');

  override draw(sketch: p5): void {
    super.draw(sketch);
  }
}

export const Animal = ClickableMixin(InternalAnimal);
