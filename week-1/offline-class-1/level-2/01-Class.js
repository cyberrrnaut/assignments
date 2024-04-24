class Animal {
  constructor(name, legCount) {
    this.name = name;
    this.legCount = legCount;
  }
  describe() {
    // return `${this.name} has ${this.legCount} legs`;
    console.log(`${this.name} has ${this.legCount} legs`);
  }
}

let a = new Animal("fourArms", 4);

a.describe();

//same same but difflant//

class Animal {
  constructor(name, legCount) {
    this.name = name;
    this.legCount = legCount;
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`;
    // console.log(`${this.name} has ${this.legCount} legs`);
  }
}

let b = new Animal("fourArms", 4);

console.log(b.describe());
