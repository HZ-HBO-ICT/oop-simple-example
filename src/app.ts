//  Interface to declare
interface Teacher {
  name: string;
  profession: string;
  brand: string;
}

const teachers: Teacher[] = [
  {
    name: 'Loek',
    profession: 'Teacher',
    brand: 'Linux',
  },
  {
    name: 'Elio',
    profession: 'Teacher',
    brand: 'Windows',
  },
  {
    name: 'Daan',
    profession: 'Teacher',
    brand: 'Arduino',
  },
  {
    name: 'Frans',
    profession: 'Teacher',
    brand: 'Windows',
  },
  {
    name: 'Rimmert',
    profession: 'Teacher',
    brand: 'Apple',
  },
];

function writeToTheDom() {
  const tbody: HTMLElement = document.getElementById('teachers');
  teachers.forEach((teacher) => {
    const tr: HTMLTableRowElement = document.createElement('tr');
    const tdName: HTMLTableCellElement = document.createElement('td');
    const tdBrand: HTMLTableCellElement = document.createElement('td');
    tdName.innerText = teacher.name;
    tdBrand.innerText = teacher.brand;
    tr.append(tdName, tdBrand);
    tbody.append(tr);
  });
}
writeToTheDom();

class Car {
  private brand: string;

  private model: string;

  private fuel: string;

  private speed: number;

  private mileage: number;

  constructor(
    brand: string,
    model: string,
    fuel: string,
    speed: number,
    mileage: number,
  ) {
    this.brand = brand;
    this.model = model;
    this.fuel = fuel;
    this.speed = speed;
    this.mileage = mileage;
  }
}

const volvo = new Car('Volvo', '240', 'Gas', 200, 200000);
console.log(volvo);
