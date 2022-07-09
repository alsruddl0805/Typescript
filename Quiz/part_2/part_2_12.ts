// Part 2 _ 10 : 조건문으로 타입만들기 & infer

// type if 문은 삼항 연산자로 체크 - extends 사용
type Age<T> = T extends string ? T : unknown;
type FirstItem<T> = T extends any[] ? T[0] : any;

// 조건문에서 사용가능한 infer 키워드 (type 뽑아내는 용으로 사용)
type Age2<T> = T extends infer R ? R : unknown;

/*
infer 키워드를 쓰는 이유
1. array 내부의 타입만 뽑을 때
2. 함수의 return type만 뽑을 때 (이건 기존에 있는 type a5 = ReturnType<() => void> 사용하면 될듯 함)
*/
type Age3<T> = T extends (infer R)[] ? R : unknown;
type a4 = Age3<string[]>; // => type a4 : string type

type Age4<T> = T extends (() => infer R) ? R : unknown;
type a5 = Age4<() => void>; // type a5 : void type


// ================

/*
Q1. 타입 파라미터로 
1. array 타입을 입력하면
2. array의 첫 자료가 string이면 string 타입을 그대로 남겨주고 
3. array의 첫 자료가 string이 아니면 unknown 을 남겨주려면 어떻게 타입을 만들어놔야할까요?
*/
type TypeChk<T> = T extends [string, ...any] ? T[0] : unknown;

/*
Q2. 함수의 파라미터의 타입을 뽑아주는 기계를 만들어보십시오. 
타입뽑기<(x :number) => void> //이러면 number가 이 자리에 남음
타입뽑기<(x :string) => void> //이러면 string이 이 자리에 남음
*/
type TypeChk2<T> = T extends ((x :infer R) => any) ? R : unknown;