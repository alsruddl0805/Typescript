// Part 2 _ 3 : 함수에 return type에 사용하는 never 타입 (대부분 안씀)

/*
조건 1. return 값이 없어야함
조건 2. endpoint가 없어야함 (1과 같은말)
*/
function neverType() :never {
    throw new Error() // 강제로 에러 실행 = 코드 실행 중단됨 (조건 1,2 충족)
    
    while (true) {
        // 무한히 도는 끝나지 않는 함수
    }
}

// never 타입이 등장하는 경우 1
function checkNever (params :string) {
    if (typeof params === 'string') {
        console.log(params);
    } else { // 애초에 string밖에 들어올 수 없는데, else문을 넣어버리면
        console.log(params); // never가 되어버림. = string이 아닌 타입이 들어올 일이 없다.
    }
}

// never 타입이 등장하는 경우 2
/*
function () 처럼 함수 선언문은 return값이 없으면 자동으로 void타입이 할당되지만,
let 변수 = function () 같은 함수 표현식은 return값이 없으면 never타입이 할당된다.
*/
let checkNever2 = function() { // checkNever () => never
    throw new Error();
}