// 문제 20 : 몫과 나머지

// 공백으로 구분하여 두 숫자가 주어짐
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력

const number = prompt('두 숫자 입력').split(' ');
const [a,b] = [number[0],number[1]];

const result = parseInt(a / b, 10);    
const left = a % b;

console.log(result, left);