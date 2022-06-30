"use strict";
var title = document.querySelector("#title");
if (title) {
    title.innerHTML = '하이';
}
if (title instanceof Element) {
    title.innerHTML = '하이 instanceof';
}
if (title === null || title === void 0 ? void 0 : title.innerHTML) {
    title.innerHTML = '하이 ?.';
}
var link = document.querySelector(".link");
if (link instanceof HTMLAnchorElement) {
    link.href = 'https://kakao.com';
}
var button = document.querySelector("#button");
button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
});
var image = document.querySelector("#image");
if (image instanceof HTMLImageElement) {
    image.src = 'new.jpg';
}
var images = document.querySelectorAll(".naver");
images.forEach(function (i) {
    if (i instanceof HTMLAnchorElement) {
        i.href = 'https://kakao.com';
    }
});
