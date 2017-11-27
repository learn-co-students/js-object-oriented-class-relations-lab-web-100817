let driverId = 0
let passengerId = 0
let tripId = 0
let store = {drivers:[], passengers:[], trips:[]}

class Driver {
  constructor(name) {
    this.name = name
    this.id = ++driverId
    store.drivers.push(this)
  }

  trips() {
    let trips = store.trips.filter((trip) => (trip.driverId === this.id))
    return trips
  }

  passengers() {
    let trips = this.trips()
    let pass = trips.map( (trip) => {
      return trip.passenger()
    })
    return pass
  }
}

class Passenger {
  constructor(name) {
    this.name = name
    this.id = ++passengerId
    store.passengers.push(this)
  }

  trips() {
    let trips = store.trips.filter((trip) => (trip.passengerId === this.id))
    return trips
  }

  drivers() {
    let trips = this.trips()
    let drivers = trips.map( (trip) => {
      return trip.driver()
    })
    return drivers
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId
    store.trips.push(this)

    if (driver) { this.driverId = driver.id}
    if (passenger) { this.passengerId = passenger.id}
  }

  passenger() {
    return store.passengers.find((passenger) => {
      return passenger.id === this.passengerId
    })
  }

  driver() {
    return store.drivers.find(function (drivers) {
      return drivers.id === this.driverId
    }.bind(this))
  }
}
