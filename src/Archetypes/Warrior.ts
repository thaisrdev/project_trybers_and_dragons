import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _damage: EnergyType;
  private static _instance = 0;

  constructor(name: string) {
    super(name);
    this._damage = 'stamina';
    Warrior._instance += 1;
  }

  override get energyType(): EnergyType {
    return this._damage;
  }

  static override createdArchetypeInstances(): number {
    return Warrior._instance;
  }
}

export default Warrior;
