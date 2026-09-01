import GoodyHut from './GoodyHut';
import Unit from '@civ-clone/core-unit/Unit';

export interface IAction {
  goodyHut(): GoodyHut;
  perform(): void;
  unit(): Unit;
}

export class Action implements IAction {
  private _goodyHut: GoodyHut;
  private _unit: Unit;

  constructor(goodyHut: GoodyHut, unit: Unit) {
    this._goodyHut = goodyHut;
    this._unit = unit;
  }

  goodyHut(): GoodyHut {
    return this._goodyHut;
  }

  perform(): void {}

  unit(): Unit {
    return this._unit;
  }
}

export default Action;
