import p5, { Image } from 'p5';
import { Drawable } from './Drawable';

export abstract class Character implements Drawable {
  private image: Image
  protected y: number;

  constructor(protected sketch: p5, protected position: number, protected florHeight: number, image: Image | string, protected size = 90) {
    this.y = florHeight - this.size;
    this.image = typeof (image) === 'string'
      ? sketch.loadImage(image)
      : image;
  }

  draw(sketch: p5): void {
    sketch.image(this.image, this.position, this.y, this.size, this.size);
  }

  protected realSizeOffset: [number, number] = [0, 0];
}