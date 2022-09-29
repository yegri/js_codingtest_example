// 문제16 : 로꾸거

// 문장을 거꾸로 출력하는 프로그램 만들기

const text = '거꾸로';

const reversed = text.split('').reverse().join(''); 
console.log(reversed);

// split : 문자열의 문자들을 1개씩 분리하여 배열로 만듦 
// reverse :역순으로 배열
// join : 하나의 문자열로 합침