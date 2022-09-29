// 문제19 : 제곱을 구하자

// 공백으로 구분하여 두 숫자 a,b가 주어지면 a의 b승을 구하는 프로그램을 작성하세요

const number = prompt('두 개의 숫자 작성').split(' ');
const [a,b]=[number[0],number[1]]; // 구조분해를 이용하여 number 배열의 값을 각각 a와 b로 할당

let square = Math.pow(a,b);

console.log(square);