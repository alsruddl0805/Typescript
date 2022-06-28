// Part 1 _ 4 : Typescript의 엄격함에 대하여

let age :string|number;
let age2 :unknown = 1;

/* 
age + 1; -> 에러가 나는 이유

string + 1 (가능)
number + 1 (가능)
string|number + 1 (불가능)

--- 

age2 - 1;

변수가 1 값을 가지고 있음에도 에러가 나는 이유
=> 값은 1을 갖고 있지만 타입은 숫자타입이 아니기 때문에
*/