import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _damage: EnergyType;
  private static _instance = 0;

  constructor(name: string) {
    super(name);
    this._damage = 'stamina';
    Ranger._instance += 1;
  }

  override get energyType(): EnergyType {
    return this._damage;
  }

  static override createdArchetypeInstances(): number {
    return Ranger._instance;
  }
}

export default Ranger;
