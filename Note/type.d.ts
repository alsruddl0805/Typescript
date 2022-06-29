declare let testName: string;
declare let testObject: {
    name?: string;
    name2: number;
};
declare let testUnion: string | number;
declare type isUnion = string | number;
declare let testName2: isUnion;
declare type animal = {
    name: string;
    age: number;
};
declare let animalInfo: animal;
declare type girlfriend = {
    readonly name: string;
};
declare const newfriend: girlfriend;
declare let anyName: any;
declare type Member = [number, boolean];
declare let john: Member;
declare function checkType(x: number): number;
declare type Member2 = {
    [key: string]: string;
};
declare let mike: Member2;
declare class User {
    name: string;
    constructor(name: string);
}
