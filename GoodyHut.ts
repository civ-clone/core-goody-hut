import { Action as ActionRule, IActionRegistry } from './Rules/Action';
import {
  ActionPerformed,
  IActionPerformedRegistry,
} from './Rules/ActionPerformed';
import {
  DataObject,
  IDataObject,
} from '@civ-clone/core-data-object/DataObject';
import { Discovered, IDiscoveredRegistry } from './Rules/Discovered';
import {
  RuleRegistry,
  instance as ruleRegistryInstance,
} from '@civ-clone/core-rule/RuleRegistry';
import Action from './Action';
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
    action.perform();

    (this.#ruleRegistry as IActionPerformedRegistry).process(
      ActionPerformed,
      this,
      action
    );
  }

  actions(unit: Unit): Action[] {
    return (this.#ruleRegistry as IActionRegistry).process(
      ActionRule,
      this,
      unit
    );
  }

  process(unit: Unit): void {
    (this.#ruleRegistry as IDiscoveredRegistry).process(Discovered, this, unit);
  }

  tile(): Tile {
    return this.#tile;
  }
}

export default GoodyHut;
