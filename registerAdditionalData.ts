import { instance as additionalDataRegistryInstance } from '@civ-clone/core-data-object/AdditionalDataRegistry';
import goodyHut from './AdditionalData/goodyHut';

additionalDataRegistryInstance.register(...goodyHut());
