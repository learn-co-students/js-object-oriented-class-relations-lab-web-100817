let store = {drivers: [], passengers: [], trips: []};

let driverId = 0;

class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++driverId;
    store.drivers.push(this);
  }

  trips(){
    return store.trips.filter(t => t.driverId === this.id)
  };

  passengers(){
    // debugger;
    return this.trips().map(t => t.passenger())
  };
};

let passengerId = 0;

class Passenger {
  constructor(name) {
    this.name = name;
    this.id = ++passengerId;
    store.passengers.push(this);
  };

  trips(){
    // return store.trips.filter(trip => trip.passengerId === this.id);
    return store.trips.filter(function (trip) {
      return trip.passengerId === this.id;
    }.bind(this));
  };

  drivers(){
    return this.trips().map(t => t.driver());
  };
};

let tripId = 0;

class Trip {
  constructor(driver, passenger) {
    if (driver) {
      this.driverId = driver.id;
    };
    if (passenger) {
      this.passengerId = passenger.id;
    };
    this.id = ++tripId;
    store.trips.push(this);
  };

  passenger(){
    return store.passengers.filter(pas => pas.id === this.passengerId)[0];
  };

  driver(){
    // debugger;
    return store.drivers.filter(function(d){return d.id === this.driverId;}.bind(this))[0];
  };
}
