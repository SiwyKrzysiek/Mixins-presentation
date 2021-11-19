import p5, { Image } from 'p5';
import { Clickable, ClickableMixin } from '.';
import { Character } from './Character';

class InternalAnimal extends Character implements Clickable {
  private dialog: Image;
  private makingSoundFor = 0;
  private isMakingSound = () => this.makingSoundFor > 0;

  constructor(sketch: p5, position: number, florHeight: number, image: Image | string, size: number, private sound: string) {
    super(sketch, position, florHeight, image, size);

    this.dialog = sketch.loadImage('assets/dialog.png');
  }

  clickedInside = (x: number, y: number) => {
    return x >= this.position && x <= this.position + this.size
      && y >= this.y && y <= this.y + this.size
  };

  onClick = () => {
    this.makingSoundFor = 100;
  };

  override draw(sketch: p5): void {
    super.draw(sketch);

    if (this.isMakingSound()) {
      this.makingSoundFor -= 1;
      this.showDialog(sketch, this.sound);
    }
  }

  private showDialog = (sketch: p5, text: string) => {
    const dialogSize = this.size * 0.8;
    sketch.image(this.dialog, this.position + this.size, this.y - dialogSize * 0.5, dialogSize, dialogSize);
    sketch.text(text, this.position + this.size + dialogSize * 0.2, this.y - dialogSize * 0.5 + dialogSize * 0.3, dialogSize, dialogSize)
  }
}

export const Animal = ClickableMixin(InternalAnimal);
