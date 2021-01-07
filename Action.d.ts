import GoodyHut from './GoodyHut';
import Unit from '@civ-clone/core-unit/Unit';
export interface IGoodyHutAction {
  goodyHut(): GoodyHut;
  perform(): void;
  unit(): Unit;
}
export declare class Action implements IGoodyHutAction {
  #private;
  constructor(goodyHut: GoodyHut, unit: Unit);
  goodyHut(): GoodyHut;
  perform(): void;
  unit(): Unit;
}
export default Action;
