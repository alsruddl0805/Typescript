interface CarType {
    model: string;
    price: number;
}
declare class Cars implements CarType {
    model: string;
    price: number;
    constructor(a: string);
}
declare let myCar: Cars;
