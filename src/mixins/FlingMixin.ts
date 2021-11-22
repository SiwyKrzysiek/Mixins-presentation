import p5, { Element } from 'p5';
import { Character } from 'objects';
import { GConstructor } from '../typeHelpers';

type CharacterConstraint = GConstructor<Character>;

export function FlingMixin<TBase extends CharacterConstraint>(Base: TBase, liftForce: number) {
  return class ClickableThing extends Base {
    _fallingSpeed = 0;
    _button: Element | undefined;

    override draw(sketch: p5): void {
      super.draw(sketch);

      if (!this._button) {
        this._button = sketch.createButton('FLY');
        this._button.mouseClicked(this._flap)

      }

      const canvasContainer = document.getElementById('canvas-container');
      const rect = canvasContainer?.getBoundingClientRect() ?? { x: 0, y: 0 };
      this._button.position(this.position + rect.x + this.realSizeOffset[0], this.florHeight + rect.y + 10);

      this._fall();
    }

    isAboveGround = (): boolean => this.y < this.florHeight - this.size;

    _flap = () => {
      this._fallingSpeed = 0;

      this.y -= liftForce;
    }

    _fall = () => {
      if (!this.isAboveGround()) {
        return;
      }

      this._fallingSpeed += 0.5;
      this.y = Math.min(this.y + this._fallingSpeed, this.florHeight - this.size);
    }
  }
}
