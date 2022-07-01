// Part 1 _ 10 : 타입스크립트로 HTML 변경과 조작할 때 주의점

let title = document.querySelector("#title");

// narrowing 5가지

// 1. type null check
if (title) {
    title.innerHTML = '하이';
}

// 2. instanceof 연산자
if (title instanceof Element) {
    title.innerHTML = '하이 instanceof';
}

// 3. as -> 추천하지 않음 (타입스크립트를 쓰는 의미가 없음)
// let title = document.querySelector("#title") as Element;

// 4. object에 붙히는 ?.
// title에 innerHTML이 있으면 출력 / 없으면 undefined (optional chaining)
if (title?.innerHTML) {
    title.innerHTML = '하이 ?.';
}

// 5. tsconfig.json 내부 strinctNullChecks strinct 모드 끄던가 -> 타입스크립트 쓰는 의미가 없음


// -----------------------------------------------------------------------

let link = document.querySelector(".link");

// HTMLAnchorElement = 각 태그에 필요한 정확한 타입명이 존재함
if (link instanceof HTMLAnchorElement) {
    link.href = 'https://kakao.com';
}

// -----------------------------------------------------------------------

let button = document.querySelector("#button");
// ?. => 가능하면 붙히고 아니면 undefined
button?.addEventListener('click', function () {

});


// Q1. 버튼을 누르면 이미지를 바꿔봅시다. <img id="image" src="test.jpg">
let image = document.querySelector("#image");
if (image instanceof HTMLImageElement) {
    image.src = 'new.jpg';
}

/*
Q2. 바꾸고 싶은 html 요소가 많습니다.
3개의 링크가 있는데 이 요소들의 href 속성을 전부 https://kakao.com으로 바꾸고 싶은 겁니다.
자바스크립트 코드를 어떻게 짜야할까요?
*/
let images = document.querySelectorAll(".naver");

images.forEach((i) => {
    if (i instanceof HTMLAnchorElement) {
        i.href = 'https://kakao.com';
    }
});