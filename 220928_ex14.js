// 문제14 : 3의 배수인가요?

// 입력으로 랜덤한 숫자 n이 주어집니다.
// 만약 그 수가 3의 배수라면 '짝', 3의 배수가 아니라면 n 그대로 출력

let number = prompt('숫자 입력');

if(number%3===0){
    console.log('짝');
}else{
    console.log(number);
};