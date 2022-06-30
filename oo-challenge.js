class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return 'Beep.'
    }
    toString() {
        return `make: ${this.make}, model: ${this.model}, year: ${this.year}`
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine() {
        return 'VROOM!';
    }
}

class Garage {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(vehicle) {
        if (!(vehicle instanceof Car) || !(vehicle instanceof Motorcycle)) {
            return 'Only vehicles are allowed in here!';
        } else if (this.vehicles.length === this.capacity) {
            return "Sorry, we're full."
        }
        this.vehicles.push(vehicle);
    }
}