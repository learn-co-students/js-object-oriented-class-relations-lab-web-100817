let store = {
  drivers: [],
  passengers: [],
  trips: []
}

let driverIds = 0;
let passengerIds = 0;
let tripIds = 0;

class Driver {
  constructor(name) {
    this.id = ++driverIds;
    this.name = name;
    store.drivers.push(this);
  }

  trips() {
    return store.trips.filter((trip) => {
      return trip.driverId === this.id;
    });
  }

  passengers() {
    return this.trips().map((trip) => {
      return store.passengers.find((passenger) => {
        return passenger.id === trip.passengerId;
      })
    })
  }
}

class Passenger {
  constructor(name) {
    this.id = ++passengerIds;
    this.name = name;
    store.passengers.push(this);
  }

  trips() {
    return store.trips.filter((trip) => {
      return trip.passengerId === this.id;
    });
  }

  drivers() {
    return this.trips().map((trip) => {
      return store.drivers.find((driver) => {
        return driver.id === trip.driverId;
      })
    })
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripIds;
    store.trips.push(this);
    if (driver) {
      this.driverId = driver.id;
    }
    if (passenger) {
      this.passengerId = passenger.id;
    }
  }

  passenger() {
    return store.passengers.find((passenger) => {
      return passenger.id === this.passengerId;
    })
  }

  driver() {
    return store.drivers.find((driver) => {
      return driver.id === this.driverId;
    })
  }
}


// Passenger class:
// A passenger has many trips, and has many drivers through trips.
// new Passenger() - initialized with a name; returns a JavaScript object that has attributes of id, and name
// trips() - returns all of the trips that a passenger has taken
// drivers() - returns all of the drivers that has taken a passenger on a trip
// Trip class:
// A trip belongs to a driver and belongs to a passenger.
// new Trip() - initialized with an instance of driver and an instance of passenger; returns a JavaScript that has attributes id, driverId, and passengerId
// driver() - returns the driver associated with the trip
// passenger() - returns the passenger associated with the trip