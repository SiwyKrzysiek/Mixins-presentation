import p5 from 'p5';

export abstract class Thing {
  abstract draw(sketch: p5, y: number): void;
}

// export { Thing };