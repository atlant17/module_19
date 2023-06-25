// Задание №1
const person = {
    counry: "Russia",
    city: "Moscow",
    gender: "male",
}

const student = Object.create(person);
student.unName = "MSU";

function getOwnProp(obj) {
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            console.log(key + ": " + obj[key]);
        }
    }
}

getOwnProp(student);

// Задание №2
function hasProp(prop, obj) {
  let result = false;
  for(let key in obj) {
    if(key === prop) {
      result = true;
    }
  }
  return result;
}

hasProp("city", student)

// Задание №3
function newObj() {
  const obj = Object.create;
  return obj;
}

let newStudent = newObj()

// Задание №4
function ElAppliance(name, weight, price){
  this.name = name,
  this.weight = weight,
  this.price = price,
  this.power = '220V';
}

ElAppliance.prototype.turnOn = function() {
    console.log('The device is turned ON');
}

ElAppliance.prototype.turnOff = function() {
    console.log('The device is turned OFF');
}

function Tv(name, weight, price, diagonal) {
    this.name = name,
    this.weight = weight,
    this.price = price,
    this.diagonal = diagonal;
}

Tv.prototype = new ElAppliance();

Tv.prototype.changeChannel = function(channel) {
    console.log(`The channel is ${channel}`)
}

Tv.prototype.changeVolume = function(volume) {
    console.log(`The volume is ${volume}`)
}

const tv = new Tv('SONY', '5kg', '250$', '32d');
tv.turnOn();
tv.changeChannel(13);
tv.changeVolume(22);
tv.turnOff();

function LedStrip(name, weight, price, length) {
    this.name = name,
    this.weight = weight,
    this.price = price,
    this.length = length;
}

LedStrip.prototype = new ElAppliance();

LedStrip.prototype.changeLength = function(length) {
    this.length = length;
    console.log(`The new length is ${length}`);
}

LedStrip.prototype.changeColour = function(colour) {
    console.log(`The colour is ${colour}`);
}

const ledStrip = new LedStrip('PHILIPS', '0.4kg', '34$', '5m');
ledStrip.turnOn();
ledStrip.changeColour('green');
ledStrip.changeColour('orange');
ledStrip.turnOff();
ledStrip.changeLength('2m');

// Задание №5

class ElAppliance {
    constructor(name, weight, price) {
        this.name = name,
        this.weight = weight,
        this.price = price,
        this.power = '220V';
}
    turnOn() {
    console.log('The device is turned ON');
}
    turnOff() {
    console.log('The device is turned OFF');
}
}

class Tv extends ElAppliance {     
    constructor(name, weight, price, diagonal, power){
        super(power);
        this.name = name;
        this.weight = weight;
        this.price = price;
        this.diagonal = diagonal;
}	
    changeChannel(channel) {
        console.log(`The channel is ${channel}`);
    }

    changeVolume(volume) {
        console.log(`The volume is ${volume}`);
    }
}

const tv_2 = new Tv('SONY', '5kg', '250$', '32d');
tv.turnOn();
tv.changeChannel(13);
tv.changeVolume(22);
tv.turnOff();

class LedStrip extends ElAppliance {     
    constructor(name, weight, price, length, power){
        super(power);
        this.name = name;
        this.weight = weight;
        this.price = price;
        this.length = length;
}	
    changeLength(length) {
        this.length = length;
        console.log(`The new length is ${length}`);
    }

    changeColour(colour) {
        console.log(`The colour is ${colour}`);
    }
}

const ledStrip_2 = new LedStrip('PHILIPS', '0.4kg', '34$', '5m');
ledStrip.turnOn();
ledStrip.changeColour('green');
ledStrip.changeColour('orange');
ledStrip.turnOff();
ledStrip.changeLength('2m');