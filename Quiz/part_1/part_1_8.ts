// Part 1 _ 8 : Literal Types로 만드는 const 변수 유사품

/*
'가위', '바위', '보' 문자들만 파라미터로 입력할 수 있고
- '가위', '바위', '보' 라는 문자들만 담을 수 있는 array 자료만 return 할 수 있습니다
- 예를 들면 ['가위', '보', '가위'] 이런거 return 가능

- ['가위', '바보'] 이런거 return하면 에러나야함 
*/
function gameParamsCheck(mode: '가위'|'바위'|'보') :('가위'|'바위'|'보')[] {
    return [mode];
}
gameParamsCheck('가위');

/*
[ at const 문법 ]
1. 타입을 object의 value로 바꿔줍니다. (타입자체를 'kim'으로 바꿔줍니다)
2. object안에 있는 모든 속성을 readonly로 바꿔줍니다 (변경하면 에러나게)

var 자료 = {
  name : 'kim'
}

function 내함수(a : 'kim') {

}
내함수(자료.name)

=> 에러나는 것 방지하려면

var 자료 = {
  name : 'kim'
} at const; 
*/