// 문제 36 : 구구단 출력하기

// 1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램 작성

const gugudan = prompt('1~9까지의 숫자 중 하나 입력');
let result = '';

for(i=1 ; i<=9 ; i++){
   result += (gugudan * i + ' ');
}
console.log(result);