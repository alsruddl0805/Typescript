declare class User3 {
    protected x: number;
}
declare class NewUser extends User3 {
    y: number;
}
declare let newUser: NewUser;
declare class User4 {
    static x: number;
    y: number;
}
declare let user4: User4;
declare class User5 {
    static y: number;
    protected z: number;
}
declare class addNum {
    private static x;
    static y: number;
    static addOne(num: number): void;
    static printX(): void;
}
declare class Square {
    width: number;
    height: number;
    color: string;
    constructor(w: number, h: number, c: string);
    draw(): void;
}
declare let createSquare: Square;
