// Part 1 _ 3 : 타입스크립트 기본 타입 정리 (primitive types)

// Q1. 여러분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다. 
let myName :string = 'min gyeong';
let myAge :number = 25;
let myBirth = '서울';

// Q2. 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오.
let myFavorite :{
    title : string,
    singer : string,
} = {
    title : '담다디',
    singer : '이상은',
};

// Q3. 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.
/* 
let project = {
  member : ['kim', 'park'],
  days : 30,
  started : true,
}
*/
let project :{
    member : string[],
    days : number,
    started : boolean, 
} = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
};