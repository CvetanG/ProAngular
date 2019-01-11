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

export class Name {
    first: string;
    second: string;
    // constructor(first: string, second: string) {
    //     this.first = first;
    //     this.second = second;
    // }
    constructor(private first: string, private second: string) {}
    get nameMessage() : string {
        return `Hello ${this.first} ${this.second}`;
    }
}

export class WeatherLocation {
    weather: string;
    city: string;
    //
    constructor(private weather: string, private city: string) {}
    get weatherMessage() : string {
        return `It is ${this.weather} in ${this.city}`;
    }
}