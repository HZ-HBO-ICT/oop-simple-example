// monster
class Monster {
  private name: string;

  private age: number;

  private ability: string;

  private strength: number;

  private category: string;

  private level: number;

  constructor(
    name: string,
    age: number,
    ability: string,
    strength: number,
    category: string,
    level: number,
  ) {
    this.name = name;
    this.age = age;
    this.ability = ability;
    this.strength = strength;
    this.category = category;
    this.level = level;
  }

  public fight() {
    this.strength += 1;
  }

  private levelUp() {
    this.level += 1;
  }

  public flee() {
    this.strength -= 1;
  }

  public eat(food:string) {
    if (food === 'healthy') {
      this.strength += 1;
    }
  }
}

const Godzilla = new Monster('Suzy', 112, 'Jump', 100210, 'Dinosaur', 22);
console.log(Godzilla);
