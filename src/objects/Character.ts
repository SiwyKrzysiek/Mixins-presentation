import p5, { Image } from 'p5';
import { Thing } from './Thing';

export class Character extends Thing {
  private image: Image
  protected y: number;

  constructor(protected sketch: p5, protected position: number, protected florHeight: number, image: Image | string, protected size = 90) {
    super();

    this.y = florHeight;
    this.image = typeof (image) === 'string'
      ? sketch.loadImage(image)
      : image;
  }

  override draw(sketch: p5): void {
    sketch.image(this.image, this.position, this.y - this.size, this.size, this.size);
  }
}