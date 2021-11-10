class Monster {
    constructor(name, age, ability, strength, category, level) {
        this.name = name;
        this.age = age;
        this.ability = ability;
        this.strength = strength;
        this.category = category;
        this.level = level;
    }
    fight() {
        this.strength += 1;
    }
    levelUp() {
        this.level += 1;
    }
    flee() {
        this.strength -= 1;
    }
    eat(food) {
        if (food === 'healthy') {
            this.strength += 1;
        }
    }
}
const Godzilla = new Monster('Suzy', 112, 'Jump', 100210, 'Dinosaur', 22);
console.log(Godzilla);
const teachers = [
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
    const tbody = document.getElementById('teachers');
    teachers.forEach((teacher) => {
        const tr = document.createElement('tr');
        const tdName = document.createElement('td');
        const tdBrand = document.createElement('td');
        tdName.innerText = teacher.name;
        tdBrand.innerText = teacher.brand;
        tr.append(tdName, tdBrand);
        tbody.append(tr);
    });
}
writeToTheDom();
class Car {
    constructor(brand, model, fuel, speed, mileage) {
        this.brand = brand;
        this.model = model;
        this.fuel = fuel;
        this.speed = speed;
        this.mileage = mileage;
    }
}
const volvo = new Car('Volvo', '240', 'Gas', 200, 200000);
console.log(volvo);
//# sourceMappingURL=app.js.map