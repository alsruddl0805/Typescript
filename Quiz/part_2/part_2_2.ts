// Part 2 _ 2 : Narrowing 할 수 있는 방법 더 알아보기

// typeof로만 부족할때
// 1. in 키워드를 사용하여 object narrowing 가능 (속성명 in 오브젝트 자료)
type Fish = {swim: string};
type Bird = {fly: string};
function animal(who : Fish | Bird) {
    if ('swim' in who) {
        console.log('this is Fish');
    } else {
        console.log('this is Bird');
    }
}

// 2. 오브젝트 instanceof 부모class (object가 서로 비슷하면 부모 class를 확인하여 narrowing)
let date = new Date(); // Date = 부모 class
if (date instanceof Date) {
    console.log('부모 클래스가 Date');
    
}

// 3. 유사한 object의 경우 literal type을 만들어놓아라 (ex ) wheel: '4개')
type myCar = {
    wheel : '4개', // literal type
    color : string
  }
  type myBike = {
    wheel : '2개', // literal type
    color : string
  }
  
  function 함수(x : myCar | myBike){
    if (x.wheel === '4개') {
      console.log('이 차는 ' + x.color);
    } else {
      console.log('이 바이크는 ' + x.color);
    }
  }