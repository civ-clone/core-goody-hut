import GoodyHut from './GoodyHut';
import Unit from '@civ-clone/core-unit/Unit';
export interface IAction {
  goodyHut(): GoodyHut;
  perform(): void;
  unit(): Unit;
}
export declare class Action implements IAction {
  #private;
  constructor(goodyHut: GoodyHut, unit: Unit);
  goodyHut(): GoodyHut;
  perform(): void;
  unit(): Unit;
}
export default Action;
