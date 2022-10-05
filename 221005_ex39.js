// 문제 39 : 오타 수정하기

// 문장의 모든 e를 q로 잘못 친 것을 발견
// 문장이 입력되면 모든 q를 e로 바꾸는 프로그램 작성

const errorText = prompt('문장 입력');

const correctText = errorText.replace(/q/gi,'e');

console.log(correctText);


// 함수 사용
// const errorText = prompt('문장 입력');

// function replaceAll(str, searchStr, replaceStr){
//     return str.split(searchStr).join(replaceStr);
// }

// console.log(replaceAll(erroText,'q','e'));