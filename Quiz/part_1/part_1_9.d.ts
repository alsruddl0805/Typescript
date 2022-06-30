declare type memberType = {
    name: string;
    age: number;
    plusOne: (x: number) => number;
    changeName: () => void;
};
declare let 회원정보: memberType;
declare type cutZeroType = (str: string) => string;
declare type removeDashType = (str: string) => number;
declare let cutZero: cutZeroType;
declare let removeDash: removeDashType;
declare function callBackTest(str: string, func: cutZeroType, func2: removeDashType): void;
