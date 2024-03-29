import {
  DataObject,
  IDataObject,
} from '@civ-clone/core-data-object/DataObject';
import {
  RuleRegistry,
  instance as ruleRegistryInstance,
} from '@civ-clone/core-rule/RuleRegistry';
import Action from './Action';
import ActionRule from './Rules/Action';
import ActionPerformed from './Rules/ActionPerformed';
import Discovered from './Rules/Discovered';
import Tile from '@civ-clone/core-world/Tile';
import Unit from '@civ-clone/core-unit/Unit';

export interface IGoodyHut extends IDataObject {
  action(action: Action): void;
  actions(unit: Unit): Action[];
  process(unit: Unit): void;
  tile(): Tile;
}

export class GoodyHut extends DataObject implements IGoodyHut {
  #ruleRegistry: RuleRegistry;
  #tile: Tile;

  constructor(tile: Tile, ruleRegistry: RuleRegistry = ruleRegistryInstance) {
    super();

    this.#ruleRegistry = ruleRegistry;
    this.#tile = tile;

    this.addKey('tile');
  }

  action(action: Action): void {
    this.#ruleRegistry.process(ActionPerformed, this, action);

    action.perform();
  }

  actions(unit: Unit): Action[] {
    return this.#ruleRegistry.process(ActionRule, this, unit);
  }

  process(unit: Unit): void {
    this.#ruleRegistry.process(Discovered, this, unit);
  }

  tile(): Tile {
    return this.#tile;
  }
}

export default GoodyHut;
