// 문제25: 원의 넓이를 구하세요

// 원의 넓이 = 반지름의 길이 X 반지름의 길이 X 3.14
// 함수를 사용하여 원의 넓이 구하는 코드 작성

// 입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수 만들기

const n = prompt('반지름 길이 작성');

function circleWidth(){
    console.log(n * n * 3.14);
}

circleWidth();


// 답안지 답

// function circle(n) {
//     const result = n * n * 3.14;
//     return result;
// }

// const r = prompt('원의 반지름을 입력하세요');

// console.log(circle(r));