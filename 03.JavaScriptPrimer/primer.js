/*

// Creating an Object
let myData = new Object();
myData.name = "Adam";
myData.weather = "sunny";

console.log("Hello " + myData.name + ".");
console.log("Today is " + myData.weather + ".");


// Using the Object Literal Format
let myData02 = {
    name: "Merry",
    weather: "Very sunny",
    printMessages: function () {
        console.log("Hello " + myData02.name + ". ");
        console.log("Today is " + myData02.weather + ".");
    }
};
myData02.printMessages();


// Defining a Class
class MyClass {

    constructor(name, weather) {
        this.name = name;
        this._weather = weather;
    }

    set weather(value) {
        this._weather = value;
    }
    get weather() {
        return `Today is ${this._weather}`;
    }
    printMessages() {
        console.log("Hello " + this.name + ". ");
        console.log(this.weather);
    }
}
let myData03 = new MyClass("Tom", "raining");
myData03.printMessages();

// Subclass
class MySubClass extends MyClass {
    constructor(name, weather, city) {
        super(name, weather);
        this.city = city;
    }

    printMessages() {
    super.printMessages();
        console.log(`You are in ${this.city}`);
    }
}
let myDataSC = new MySubClass("Adam", "sunny", "London");
myDataSC.printMessages();


// PROTOTYPES
var MyClassP = function MyClass(name, weather) {
    this.name = name;
    this.weather = weather;
}
MyClassP.prototype.printMessages = function () {
    console.log("Hello " + this.name + ". ");
    console.log("Today is " + this.weather + ".");
};
var myDataP = new MyClassP("Eva", "sunny");
myDataP.printMessages();
*/
"use strict";
// importing modules
// import { Name, WeatherLocation } from "./modules/NameAndWeather";
var NameAndWeatherLocation = require("./modules/NameAndWeather");
var DuplicateName_1 = require("./modules/DuplicateName");
var tempConverter_1 = require("./tempConverter");
// let name = new Name("Adam", "Freeman");
// let loc = new WeatherLocation("raining", "London");
var name = new NameAndWeatherLocation.Name("Adam", "Freeman");
var loc = new NameAndWeatherLocation.WeatherLocation("raining", "London");
var other = new DuplicateName_1.Name();
// console.log(name.nameMessage);
// console.log(loc.weatherMessage);
// console.log(other.message);
// console.log(`The temp is ${cTemp}C`);
var tuple;
tuple = ["London", "raining", tempConverter_1.TempConverter.convertFtoC("38")];
console.log("It is " + tuple[2] + " degrees C and " + tuple[1] + " in " + tuple[0]);
var cities = {};
cities["London"] = ["raining", tempConverter_1.TempConverter.convertFtoC("38")];
cities["Paris"] = ["sunny", tempConverter_1.TempConverter.convertFtoC("52")];
cities["Berlin"] = ["snowing", tempConverter_1.TempConverter.convertFtoC("23")];
for (var key in cities) {
    console.log(key + ": " + cities[key][0] + ", " + cities[key][1]);
}
