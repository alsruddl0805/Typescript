declare function arrayFunction(x: unknown[]): unknown;
declare let a: unknown;
declare function checkGeneric<T>(x: T[]): T;
declare let b: number;
declare let c: string;
declare function generic1<T extends string | string[]>(x: T): void;
interface Animal {
    name: string;
    age: number;
}
declare let data: string;
declare function animalObj<T>(obj: string): T;
declare class Person2<T> {
    name: T;
    constructor(a: T);
}
declare let a2: Person2<string>;
