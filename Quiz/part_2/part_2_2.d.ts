declare type Fish = {
    swim: string;
};
declare type Bird = {
    fly: string;
};
declare function animal(who: Fish | Bird): void;
declare let date: Date;
declare type myCar = {
    wheel: '4개';
    color: string;
};
declare type myBike = {
    wheel: '2개';
    color: string;
};
declare function 함수(x: myCar | myBike): void;
