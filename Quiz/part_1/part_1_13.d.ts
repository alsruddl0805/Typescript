declare class Person {
    data: number;
    constructor(num: number);
    myFunction(a: string): void;
}
declare let person1: Person;
declare let person2: Person;
declare class Car {
    model: string;
    price: number;
    constructor(str: string, num: number);
    tax(): number;
}
declare let car1: Car;
declare class Word {
    num: number[];
    string: string[];
    constructor(...any: (string | number)[]);
}
declare let word1: Word;
