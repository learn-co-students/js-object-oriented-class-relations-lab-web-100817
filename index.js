store = {drivers:[],trips:[], passengers:[]}
let driverId = 0;
let passengerId = 0;
let tripId = 0;
class Driver{
  constructor(name){
    this.name = name;
    this.id = ++driverId;
    store.drivers.push(this);
  }
  trips(){
    return store.trips.filter(function(trip){
      return trip.driverId === this.id;
    }.bind(this));
  }

  passengers(){
    return this.trips.call(this).map(function(trip){
      return store.passengers.find(function(passenger){
        return passenger.id === trip.passengerId;
      })
    });
  }
}


class Passenger{
  constructor(name){
    this.name = name;
    this.id = ++passengerId;
    store.passengers.push(this);
  }
  trips(){
    return store.trips.filter(function(trip){
      return trip.passengerId === this.id;
    }.bind(this));
  }

  drivers(){
    return this.trips.call(this).map(function(trip){
      return store.drivers.find(function(driver){
        return driver.id === trip.driverId;
      });
    })
    }
  }

class Trip{
  constructor(driver,passenger){
    this.id = ++tripId;
    driver ? this.driverId = driver.id : null;
    passenger ? this.passengerId = passenger.id : null;
    store.trips.push(this);
  }

  driver(){
    // let driverId = this.driverId;
      return store.drivers.find(function(driver){
        return driver.id === this.driverId}.bind(this));
  }


  passenger(){
    // let passengerId = this.passengerId;
      return store.passengers.find(function(passenger){
        return passenger.id === this.passengerId}.bind(this));
}
}
