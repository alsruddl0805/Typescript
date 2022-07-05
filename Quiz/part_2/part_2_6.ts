// Part 2 _ 6 : type import export / namespace

// a.ts -> b.ts 이렇게 정의된 타입을 가져다 쓰고 싶은 경우 
export type Name = string | boolean;
export type Age = (a :number) => number;

// b.ts
// import {Name, Age} from './a';
let myName :Name = 'kim';
let myFunction :Age = (a) => { return a + 10 } 
console.log(myName, myFunction);


// 과거에 사용하던 namespace
/*
 타입 1.5버전 이하에서는 export / import 문법이 없었기 때문에 script 태그를 이용하여 파일을 첨부하여 사용했다.
 그 문법의 문제는 파일이 많아질수록 변수명이 겹칠 수 있는 위험이 높아지는 것이였는데,
 그래서 외부 파일에서 사용하지 않을 변수들을 함수들로 감쌌다.
 타입변수들은 namespace문법으로 감쌌음
*/

// a.ts
namespace MyNamespace {
    export interface PersonInterface { age : number };
    export type NameType = number | string;
  } 

// b.ts
// <reference path="./a.ts" /> => reference 태그를 사용하여 import 해옴
let myName2 :MyNamespace.NameType = '민수';
let myAge :MyNamespace.PersonInterface = { age : 10 };
console.log(myName2, myAge);


// ============================================================

// Q1. export / import 테스트
import {Car2, Bike, ObjFunction} from '../../Note/etc';
let car2 :Car2 = {wheel: 4, model: 'audi'};
let bike :Bike = {wheel: 2, model: 'mart'};
console.log(car2, bike);

let obj :ObjFunction = function (a) {
    console.log(a);
}
obj({name: '나'}); 