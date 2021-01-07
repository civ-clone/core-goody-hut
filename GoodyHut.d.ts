import { RuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import Action from './Action';
import Tile from '@civ-clone/core-world/Tile';
import Unit from '@civ-clone/core-unit/Unit';
export interface IGoodyHut {
  action(action: Action): void;
  actions(unit: Unit): Action[];
  process(unit: Unit): void;
  tile(): Tile;
}
export declare class GoodyHut implements IGoodyHut {
  #private;
  constructor(tile: Tile, ruleRegistry?: RuleRegistry);
  action(action: Action): void;
  actions(unit: Unit): Action[];
  process(unit: Unit): void;
  tile(): Tile;
}
export default GoodyHut;
