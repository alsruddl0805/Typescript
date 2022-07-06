// Part 2 _ 7 : 타입을 파라미터로 입력하는 Generic
// Generic <> 문법은 class, type 등에도 사용 가능함

function arrayFunction(x: unknown[]) {
    return x[0];
}
let a = arrayFunction([4,2]);
console.log(a);
/*
=> 여기서 4가 return 된다고 해서 타입스크립트는 자동으로 타입을 지정해주지 않는다.
   따라서, a+1 같은 연산도 에러가 나기 때문에, 애초에 타입을 파라미터로 함수에 미리 입력하는 방법을 사용한다. (Generic)
*/

function checkGeneric<T>(x :T[]) :T {
    return x[0];
    // x-1 연산은 불가능함. (number말고도 다른 타입을 넣을 수 있는 가능성이 있기때문에) extends number 등으로 체크 가능
}

// <> 내부에 타입 기입 안해도 자동으로 유추해서 집어넣어줌
let b = checkGeneric<number>([4,2]);
let c = checkGeneric<string>(['kim', 'park']);


// ===============================================================


// Q1. 문자를 집어넣으면 문자의 갯수, array를 집어넣으면 array안의 자료 갯수를 콘솔창에 출력해주는 함수는 어떻게 만들까요? 
function generic1<T extends string | string[]> (x :T) {
    console.log(x.length);
}
generic1<string>('hello');
generic1<string[]>(['kim', 'park']);


// Q2.data라는 JSON 자료를 object { } 자료로 변환을 해서 return 해주는 함수를 만들어보십시오.
interface Animal {
    name : string;
    age : number 
  }
  
let data = '{"name" : "dog", "age" : 1 }'

function animalObj<T>( obj :string) :T {
    return JSON.parse(obj);
}
animalObj<Animal>(data);

// Q3. 타입을 넣는대로 바뀌는 class로 수정해봅시다.
class Person2 <T>{
    name;
    constructor(a :T){
      this.name = a;
    }
  }
let a2 = new Person2<string>('어쩌구');