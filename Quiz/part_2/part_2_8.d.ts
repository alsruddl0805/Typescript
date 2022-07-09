declare let dog: [string, boolean];
declare function tupleArray(...x: [string, number, string?]): void;
declare let food: [string, number, boolean];
declare let arr4: [string, boolean, ...boolean[]];
declare function tupleArray2(...x: [string, boolean, ...(string | number)[]]): void;
declare function checkArray(...x: [(string | number)[]]): [string[], number[]];
