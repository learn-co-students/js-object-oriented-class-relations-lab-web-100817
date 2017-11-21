const store = {drivers: [], passengers: [], trips: []}

let userId = 0;
class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++userId;
    store.drivers.push(this);
  }

  trips() {
    return store.trips.filter(function(trip) {
      return trip.driverId === this.id
    }.bind(this));
  }

  passengers() {
    return this.trips().map(function(trip) {
      return trip.passenger();
    })
  }

}

let passengerId = 0;
class Passenger {
  constructor(name) {
    this.name = name;
    this.id = ++passengerId;
    store.passengers.push(this);
  }

  trips() {
    return store.trips.filter(function(trip) {
      return trip.passengerId === this.id;
    }.bind(this))
  }

  drivers() {
    return this.trips().map(function(trip) {
      return trip.driver();
    })
  }
}

let tripId = 0;
class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
    if (driver) {
      this.driverId = driver.id;
    }
    if (passenger) {
      this.passengerId = passenger.id;
    }
    store.trips.push(this);
  }

  driver() {
    return store.drivers.filter(function(driver) {
      return driver.id === this.driverId
    }.bind(this))[0];
  }

  passenger() {
      return store.passengers.filter(function(pass) {
        return pass.id === this.passengerId;
      }.bind(this))[0];
  }

}
