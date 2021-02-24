import GoodyHut from './GoodyHut';
import Unit from '@civ-clone/core-unit/Unit';

export interface IAction {
  goodyHut(): GoodyHut;
  perform(): void;
  unit(): Unit;
}

export class Action implements IAction {
  #goodyHut: GoodyHut;
  #unit: Unit;

  constructor(goodyHut: GoodyHut, unit: Unit) {
    this.#goodyHut = goodyHut;
    this.#unit = unit;
  }

  goodyHut(): GoodyHut {
    return this.#goodyHut;
  }

  perform(): void {}

  unit(): Unit {
    return this.#unit;
  }
}

export default Action;
