// 문제 41 : 소수판별

// 숫자가 주어지면 소수인지 아닌지 판별하는 프로그램을 작성
// 소수이면 YES, 소수가 아니면 NO

const number = prompt('숫자를 입력해주세요');

if(number / number === 1){
    if(number % 2 === 1){
        console.log('YES');
    }else{
        console.log('NO');
    }
}

// 답안
const num = prompt('숫자를 입력하세요.');

function check_prime(num) {
  for (let i=2; i<num; i++) {       
    const result = num % i;
    if (result === 0) {         // num에 i값을 나눠서 나머지가 0이면, 
      console.log('NO');        // 소수 X
      return false;
    }
  }
  if (num === 1) {              // num 입력값이 1이라면, 
    console.log('NO');          // 1과 자기 자신만으로 나누어 떨어지는 소수의 조건에 맞지 않으므로 NO 출력
    return;
  }
  console.log('YES');           // 두 상항 모두 아니라면, 소수이므로 YES 출력
}

check_prime(num);