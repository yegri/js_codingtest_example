// 문제 8 : 객체의 키 이름 중복

// 자바스크립트 객체를 다음과 같이 만들었다.
// 출력값을 입력하시오.

var d = {
    'height': 180,
    'weight': 78,
    'weight': 84,
    'temperature':36,
    'eyesight':1
};

console.log(d['weight']);

// 답: 84
// 중복되면 마지막에 있는 값이 출력