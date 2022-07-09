declare type Age<T> = T extends string ? T : unknown;
declare type FirstItem<T> = T extends any[] ? T[0] : any;
declare type Age2<T> = T extends infer R ? R : unknown;
declare type Age3<T> = T extends (infer R)[] ? R : unknown;
declare type a4 = Age3<string[]>;
declare type Age4<T> = T extends (() => infer R) ? R : unknown;
declare type a5 = Age4<() => void>;
declare type TypeChk<T> = T extends [string, ...any] ? T[0] : unknown;
declare type TypeChk2<T> = T extends ((x: infer R) => any) ? R : unknown;
