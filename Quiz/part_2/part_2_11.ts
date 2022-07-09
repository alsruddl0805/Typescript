// Part 2 _ 10 : Object 타입 변환기

let keyObj = {name: 'kim', age: 20};
Object.keys(keyObj); // => [name, age];

// keyof 연산자
interface Person {
    name: 'kim',
    age: 20,
}
type KeyOfPerson = keyof Person; // "age" | "name" => union type으로 합쳐서 보내줌
let a3 :KeyOfPerson = 'name';

// type 변환
type Cars1 = {
    color: boolean,
    model : boolean,
    price : boolean | number,
  }; 

type Cars2 = {
    color: string,
    model : string,
    price : string | number,
};
// =>
type TypeChanger<T> = {
    [key in keyof T] : string // => keyof T = 'color' | 'medel' | 'price'
}
type newType = TypeChanger<Cars1>


// =================

/*
Q1. 다음 타입을 변환기를 돌려보십시오.
color, model, price 속성은 전부 string 또는 number 타입이어야합니다.
1. 변환기 하나 만드시고
2. 기존 Bus 타입을 변환기 돌려서 위 조건을 충족하는 새로운 타입을 하나 만들어보십시오.
*/
type Bus1 = {
    color : string,
    model : boolean,
    price : number
  }

type NewBusType<T> = {
    [key in keyof T] : string | number
}

type Bus2 = NewBusType<Bus1>

// Q2. 고정된 타입이 아닌, 원하는 타입으로 변경해주는 범용성 좋은 타입 변환기를 만들어보십시오.
type TypeChanger2 <MyType, T> = {
[   key in keyof MyType]: T;
};

type NewBus = TypeChanger2<Bus1, boolean>;
type NewBus2 = TypeChanger2<Bus1, string[]>