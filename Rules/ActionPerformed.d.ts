import GoodyHut from '../GoodyHut';
import GoodyHutAction from '../Action';
import Rule from '@civ-clone/core-rule/Rule';
export declare class ActionPerformed extends Rule<
  [GoodyHut, GoodyHutAction],
  void
> {}
export default ActionPerformed;
