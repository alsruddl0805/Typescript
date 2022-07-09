interface StringOnly {
    [key: string]: string;
}
declare let obejct: StringOnly;
interface DoubleObj {
    'font-size': DoubleObj | number;
}
declare let doubleObject: DoubleObj;
declare type MyObj = {
    [key: string]: string | number;
};
interface MyObj2 {
    'font-size': number;
    [key: string]: MyObj2 | number;
}
declare let obj: MyObj2;
