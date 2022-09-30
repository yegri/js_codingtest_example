// 문제27 : 객체 만들기

// 첫번째 입력 --> 학생 이름이 공백으로 구분되어 입력
// 두번째 --> 그 학생의 수학 점수가 공백으로 구분되어 주어짐

// 두 개를 합쳐 학생의 이름이 key이고 value가 수학점수인 객체 출력

const keys = prompt('이름을 입력하세요').split(' ');
const values = prompt('점수를 입력하세요').split(' ');
const obj = {};

for(let i = 0; i < keys.length ; i++){
    obj[keys[0]] = parseInt(values[0],10);
}

console.log(obj);

// obj 객체에 키를 생성하고 값을 할당 --> 키, 값은 변수를 통해 받아옴
// const keys = '예은'
// const values = '80'

// obj 객체에 키와 값을 할당하는 방법 2가지

// 1. 변수가 가지는 값에 따라 키와 값이 달라짐
// obj[keys] = values ----> keys : values  ----> 예은 : 80

// 2. 키와 값이 항상 정해져 있음
// obj.예은 = '80'