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
