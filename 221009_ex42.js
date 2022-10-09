// 문제 42 : 2022년

// 2020년 1월 1일은 토요일. 2020년 a월 b일은 무슨 요일?

// 두 수 a, b를 입력받아 2022년 a월 b일이 무슨 요일인지 리턴하는 함수 solution 완성하기

// 요일의 이름: SUN,MON,TUE,WED,THU,FRI,SAT

// 예) a = 5, b = 24 라면 5월 24일은 화요일 --> "TUE" 반환

/**
 * 제한 조건
 * 2022년은 윤년
 * 2022년 a월 b일은 실제로 있는 날
 * (13월 26일이나 2월 45일 같은 날짜는 주어지지 않음)
 */

const a = prompt('월 입력');
const b = prompt('일 입력');
const day = ['SUN','MON','TUE','WED','THU','FRI','SAT'];

function solution(a,b) {
    let todayYear = new Date().getFullYear();
    let getDay = new Date(`'${todayYear}-${a}-${b}'`).getDay();

    console.log(day[getDay]);
};

solution(a,b);