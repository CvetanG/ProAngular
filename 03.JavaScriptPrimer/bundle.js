(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
var Name = (function () {
    function Name() {
    }
    Object.defineProperty(Name.prototype, "message", {
        get: function () {
            return "Other Name";
        },
        enumerable: true,
        configurable: true
    });
    return Name;
}());
exports.Name = Name;

},{}],2:[function(require,module,exports){
/*
export class Name {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }

    get nameMessage() {
        return `Hello ${this.first} ${this.second}`;
    }
}

export class WeatherLocation {
    constructor(weather, city) {
        this.weather = weather;
        this.city = city;
    }

    get weatherMessage() {
        return `It is ${this.weather} in ${this.city}`;
    }
}
*/
"use strict";
var Name = (function () {
    // constructor(first: string, second: string) {
    //     this.first = first;
    //     this.second = second;
    // }
    function Name(first, second) {
        this.first = first;
        this.second = second;
    }
    Object.defineProperty(Name.prototype, "nameMessage", {
        get: function () {
            return "Hello " + this.first + " " + this.second;
        },
        enumerable: true,
        configurable: true
    });
    return Name;
}());
exports.Name = Name;
var WeatherLocation = (function () {
    //
    function WeatherLocation(weather, city) {
        this.weather = weather;
        this.city = city;
    }
    Object.defineProperty(WeatherLocation.prototype, "weatherMessage", {
        get: function () {
            return "It is " + this.weather + " in " + this.city;
        },
        enumerable: true,
        configurable: true
    });
    return WeatherLocation;
}());
exports.WeatherLocation = WeatherLocation;

},{}],3:[function(require,module,exports){
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
var cTemp = tempConverter_1.TempConverter.convertFtoC(38);
// console.log(name.nameMessage);
// console.log(loc.weatherMessage);
// console.log(other.message);
// console.log(`The temp is ${cTemp}C`);
var tuple;
tuple = ["London", "raining", tempConverter_1.TempConverter.convertFtoC("38")];
console.log("It is " + tuple[2] + " degrees C and " + tuple[1] + " in " + tuple[0]);

},{"./modules/DuplicateName":1,"./modules/NameAndWeather":2,"./tempConverter":4}],4:[function(require,module,exports){
/*
export class TempConverter {
    static convertFtoC(temp: number) : string {
        return ((parseFloat(temp.toPrecision(2)) - 32) / 1.8).toFixed(1);
    }

}
*/
"use strict";
/*
// Accepting Multiple Values
export class TempConverter {
    static convertFtoC(temp: number | string): string {
    let value: number = (<number>temp).toPrecision
            ? <number>temp : parseFloat(<string>temp);
        return ((parseFloat(value.toPrecision(2)) - 32) / 1.8).toFixed(1);
    }
}
*/
/*
// "as" key word
export class TempConverter {
    static convertFtoC(temp: number | string): string {
        let value: number = (temp as number).toPrecision
            ? temp as number : parseFloat(<string>temp);
        return ((parseFloat(value.toPrecision(2)) - 32) / 1.8).toFixed(1);
    }
}
*/
// Specifying Any Type
var TempConverter = (function () {
    function TempConverter() {
    }
    TempConverter.convertFtoC = function (temp) {
        var value;
        if (temp.toPrecision) {
            value = temp;
        }
        else if (temp.indexOf) {
            value = parseFloat(temp);
        }
        else {
            value = 0;
        }
        return ((parseFloat(value.toPrecision(2)) - 32) / 1.8).toFixed(1);
    };
    return TempConverter;
}());
exports.TempConverter = TempConverter;

},{}]},{},[3]);
