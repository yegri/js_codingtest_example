// 문제30 : 문자열 속 문자 찾기

// pineapple에는 apple이라는 문자 숨어있음

// 첫번째 입력에서는 문자열이 입력되고, 두번째 입력에서는 찾을 문자가 입력되어야 함

// 그 문자가 시작하는 index를 반환하는 프로그램 만들기

const all = prompt('문자열 입력');
const part = prompt('찾을 문자 입력');

console.log(all.indexOf(part));

// indexOf
// all.indexOf(part) ---> all에서 part가 처음으로 나타나는 위치의 인덱스 값 리턴
// 찾는 값이 없으면 -1 리턴