// Part 2 _ 1 : 함수 rest 파라미터, destructuring 할 때 타입지정

// rest parameter => 무제한의 파라미터가 들어올 수 있다. (배열타입)
function rest(...a : number[]) {
    console.log(a);
    // [1,2,3,4,5,6]
}
rest (1,2,3,4,5,6);

// spread operator => 괄호를 벗겨주세요 (전개연산자)
let arr = [1,2];
let arr2 = [4,5,6];
let arr3 = [...arr, ...arr2]; // => [1,2,4,5,6]

// destructuring => 변수 자리 지정 ?
let [str, num] = ['안녕', 123];
console.log(str, num); // str = '안녕', num = 123;
let {isStudent, ageNum} = {isStudent: true, ageNum: 18};
console.log(isStudent, ageNum); // isStudent = true, ageNum = 18;

// 변수만들기 == 파라미터 만들기
let desObject = {isStudent: true, ageNum: 12};
function isDestructuring({isStudent, ageNum} :{isStudent :boolean, ageNum :number}) {
    console.log(isStudent, ageNum);
}
isDestructuring(desObject);


/*
Q1. 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다. 
최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다. 
(조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
(조건2) Math.max() 사용금지 반복문이나 쓰셈 
*/
function maxNum(...num :number[]) :number {
    let max = num.sort((a,b) => b-a)[0];
    return max;
}
maxNum(1,3,6,10,2,8);

/*
Q2. 이렇게 생긴 object 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다. 
함수( { user : 'kim', comment : [3,5,4], admin : false } )
어떻게 코드를 짜야할까요?
(조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.
(조건2) 함수실행시 입력한 파라미터의 value들 (kim, [3,5,4] 이런거)을 전부 콘솔창에 출력해줘야합니다.
*/
type ObjectType = {user: string, comment: number[], admin: boolean};
let object = {user: 'kwon', comment: [5,2,3], admin: false};
function objectTest({user, comment, admin} :ObjectType) :void {
    console.log(user, comment, admin);
}
objectTest(object);

/*
Q3. 이렇게 생긴 array 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다. 
함수( [40, 'wine', false] )
어떻게 코드를 짜야할까요?
(조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.
(조건2) 함수실행시 입력한 파라미터들을 전부 콘솔창에 출력해줘야합니다.
*/
type Member3 = (number | string | boolean)[];
function member3([a,b,c] :Member3) :void {
    console.log(a,b,c);   
}
member3([42, 'wine', true]);