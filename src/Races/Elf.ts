import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  static _instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._instances += 1;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }
    
  static override createdRacesInstances(): number {
    return Elf._instances;
  }
}

export default Elf;
