declare function rest(...a: number[]): void;
declare let arr: number[];
declare let arr2: number[];
declare let arr3: number[];
declare let str: string, num: number;
declare let isStudent: boolean, ageNum: number;
declare let desObject: {
    isStudent: boolean;
    ageNum: number;
};
declare function isDestructuring({ isStudent, ageNum }: {
    isStudent: boolean;
    ageNum: number;
}): void;
declare function maxNum(...num: number[]): number;
declare type ObjectType = {
    user: string;
    comment: number[];
    admin: boolean;
};
declare let object: {
    user: string;
    comment: number[];
    admin: boolean;
};
declare function objectTest({ user, comment, admin }: ObjectType): void;
declare type Member3 = (number | string | boolean)[];
declare function member3([a, b, c]: Member3): void;
