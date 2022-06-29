declare type object1 = {
    color?: string;
    size: number;
    readonly position: number[];
};
declare type object2 = {
    name: string;
    phone: number;
    email: string;
};
declare let checkObject2: object2;
declare type isAdult = {
    isAdult: boolean;
};
declare type resObject = object2 & isAdult;
declare let checkObjeect2_2: resObject;
