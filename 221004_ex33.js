// 문제33 : 거꾸로 출력하기

// 한 줄에 여러 개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성

const number = prompt('숫자 여러 개 입력').split('').reverse().join('');

console.log(number);


// 답안

/**
 const data = prompt('숫자를 입력하세요.').split(' ').reverse();
 const result = '';

 for(let i=0 ; i < data.length; i++){
    result += data[i];
 }

 console.log(result);
 */