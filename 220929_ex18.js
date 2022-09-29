// 문제 18: 평균 점수

// 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요. 단, 소숫점 자리는 모두 버립니다.

const score = prompt('세 과목 점수 입력').split(' ');
let sum = 0;

for(let i=0; i<3; i++){
    sum += parseInt(score[i],10);   // 십진수의 형태의 숫자로 데이터 타입 변환
}

console.log(Math.floor(sum/3)); //Math.floor 메서드 : 소수점 자리 모두 버림
