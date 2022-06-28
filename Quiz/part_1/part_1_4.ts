// Part 1 _ 4 : 타입을 미리 정하기 애매할 때 (union type, any, unknown)

// 다음 변수 4개에 타입을 지정해봅시다.
let user :string = 'kim';
let age3 :undefined | number = undefined;
let married :boolean = false; 
let 철수 :(string | number | undefined | boolean)[] = [user, age, married];

// 학교라는 변수에 타입지정해보십시오.
let 학교:{
    score : (number | boolean)[],
    teacher : string,
    friend : string | string[],
} = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]