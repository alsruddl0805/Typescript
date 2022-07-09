declare type squareType = {
    color: string;
    width: number;
};
interface squareType2 {
    color: string;
    width: number;
}
declare let square: squareType;
declare let square2: squareType;
interface Student {
    name: string;
}
interface Teacher {
    name: string;
    age: number;
}
declare let student: Student;
declare let teacher: Teacher;
interface Teacher extends Student {
    age: number;
}
declare type AnimalType = {
    name: string;
};
declare type Cat = AnimalType & {
    age: number;
};
interface Product {
    brand: string;
    serialNumber: number;
    model: string[];
}
declare let 상품: Product;
interface Cart {
    product: string;
    price: number;
}
declare let cartArray: Cart[];
interface NewCart extends Cart {
    card: boolean;
}
interface CalcObj {
    plus: (a: number, b: number) => number;
    minus: (a: number, b: number) => number;
}
declare let calc: CalcObj;
