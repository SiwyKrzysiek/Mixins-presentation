import p5, { Image } from 'p5';
import { Character } from './Character';

export abstract class Machine extends Character {
  protected cycleCount = 0;
  protected thoughts: string;

  constructor(sketch: p5, position: number, florHeight: number, image: Image | string, size: number) {
    super(sketch, position, florHeight, image, size);
    this.thoughts = this.getThoughts();
  }

  override draw(sketch: p5): void {
    super.draw(sketch);

    this.think();
    sketch.text(this.thoughts, this.position + this.realSizeOffset[0], this.y - this.realSizeOffset[1])
  }

  private dec2bin = (dec: number): string => {
    return (dec >>> 0).toString(2);
  }

  private getRandomInt = (max: number): number => {
    return Math.floor(Math.random() * max);
  }

  getThoughts = (): string => {
    return this.dec2bin(this.getRandomInt(255));
  }

  private think = () => {
    this.cycleCount++;
    if (this.cycleCount >= 15) {
      this.cycleCount = 0;
      this.thoughts = this.getThoughts();
    }
  }
}