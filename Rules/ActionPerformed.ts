import GoodyHut from '../GoodyHut';
import GoodyHutAction from '../Action';
import { IRuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import Rule from '@civ-clone/core-rule/Rule';

export class ActionPerformed extends Rule<[GoodyHut, GoodyHutAction], void> {}

export default ActionPerformed;

export interface IActionPerformedRegistry
  extends IRuleRegistry<ActionPerformed, [GoodyHut, GoodyHutAction], void> {}
