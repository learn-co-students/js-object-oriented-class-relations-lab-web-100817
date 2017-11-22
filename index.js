// Driver class:
// A driver has many trips, and has many passengers through trips.
// new Driver() - initialized with a name; returns a JavaScript object that has attributes of id, and name
// trips() - returns all of the trips that a driver has taken
// passengers() - returns all of the passengers that a driver has taken on a trip
let store = {drivers: [], passengers: [], trips: []}
let driverId = 0
let passengerId = 0
let tripId = 0

class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name
    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }

  passengers() {
    return this.trips().map(trip =>  {
      return trip.passenger();
    });
  }
}

class Passenger {
  constructor(name) {
    this.id = ++passengerId
    this.name = name
    store.passengers.push(this)
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.passengerId === this.id
    })
  }

  drivers() {
    return this.trips().map(trip => {
      return trip.driver();
    });
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId
    if(passenger) {
      this.passengerId = passenger.id
    }
    if(driver) {
      this.driverId = driver.id
    }
    store.trips.push(this)
  }

  passenger(){

    return store.passengers.find(function(passenger) {
      return passenger.id === this.passengerId
    }.bind(this))
  }

  driver(){
    return store.drivers.find(function(driver) {
      return driver.id === this.driverId
    }.bind(this))
  }

}
