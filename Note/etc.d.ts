export declare type Car2 = {
    wheel: number;
    model: string;
};
export interface Bike {
    wheel: 2;
    model: string;
}
export declare type ObjFunction = (obj: {
    name: string;
}) => void;
declare global {
    type Dog = string;
}
