import { GConstructor } from '../typeHelpers';

export interface Clickable {
  clickedInside: (x: number, y: number) => boolean;
  onClick: () => void;
}


type ClickableConstraint = GConstructor<Clickable>;

export function ClickableMixin<TBase extends ClickableConstraint>(Base: TBase) {
  return class ClickableThing extends Base {
    click = (x: number, y: number): void => {
      if (this.clickedInside(x, y)) {
        this.onClick();
      }
    }
  }
}

export const canBeClicked = (object: unknown): object is { click: (x: number, y: number) => void } => {
  const { clickedInside, onClick } = object as Clickable;

  return !!clickedInside && !!onClick;
}
