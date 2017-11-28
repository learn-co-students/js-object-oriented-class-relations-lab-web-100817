let driverId = 0;
let tripId = 0;
let passengerId = 0;
const store = {drivers: [], passengers:[], trips: []}

class Driver {
  constructor(name){
    this.id = ++driverId;
    this.name = name;
    store.drivers.push(this);
  }

  trips(){
    return store.trips.filter(function (trip){
      return trip.driverId === this.id
    }.bind(this));
  }

  passengers(){
    return this.trips().map(function (trip){
      return trip.passenger()
    })
  }
}

class Passenger {
  constructor(name){
    this.id = ++passengerId;
    this.name = name;
    store.passengers.push(this);
  }

  trips(){
    return store.trips.filter(function (trip){
      return trip.passengerId == this.id
    }.bind(this))
  }

  drivers(){
    return this.trips().map(function (trip){
      return trip.driver()
    })
  }
}

class Trip {
  constructor(driver, passenger){
    this.id = ++tripId;
    if (driver) {
      this.driverId = driver.id;
    }
    if (passenger) {
      this.passengerId = passenger.id;
    }
    store.trips.push(this);
  }

  driver(){
    return store.drivers.filter(function (driver){
      return driver.id === this.driverId
    }.bind(this))[0];
  }

  passenger(){
    return store.passengers.filter(function (passenger){
      return passenger.id === this.passengerId
    }.bind(this))[0];
  }
}
