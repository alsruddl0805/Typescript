declare let keyObj: {
    name: string;
    age: number;
};
interface Person {
    name: 'kim';
    age: 20;
}
declare type KeyOfPerson = keyof Person;
declare let a3: KeyOfPerson;
declare type Cars1 = {
    color: boolean;
    model: boolean;
    price: boolean | number;
};
declare type Cars2 = {
    color: string;
    model: string;
    price: string | number;
};
declare type TypeChanger<T> = {
    [key in keyof T]: string;
};
declare type newType = TypeChanger<Cars1>;
declare type Bus1 = {
    color: string;
    model: boolean;
    price: number;
};
declare type NewBusType<T> = {
    [key in keyof T]: string | number;
};
declare type Bus2 = NewBusType<Bus1>;
declare type TypeChanger2<MyType, T> = {
    [key in keyof MyType]: T;
};
declare type NewBus = TypeChanger2<Bus1, boolean>;
declare type NewBus2 = TypeChanger2<Bus1, string[]>;
