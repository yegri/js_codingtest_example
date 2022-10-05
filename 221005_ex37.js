// 문제 37 : 반장 선거

// 학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램 작성

// const student = prompt('후보 입력').split(' ');

// let result = student.reduce((acc,cur) => {
//     if(acc[cur]){
//         acc[cur]++;
//     }else{
//         acc[cur] = 1;
//     }

//     return acc;
// },{});

// let keys = Object.keys(result);
// let values = Object.values(result);

// console.log(`${keys}(이)가 총 ${values}표로 반장이 되었습니다.`);

// 원범,혜원,유진(이)가 총 2,3,2표로 반장이 되었습니다. 여기까지밖에 못 함..

// 답안

const array = prompt('이름을 입력해주세요.').split(' ');
let result = {};
let winner = "";

for(let index in array){
    let val = array[index];
    result[val] = result[val] === undefined ?  1 : result[val] = result[val] + 1;
}

winner = Object.keys(result).reduce(function(a,b){
    return result[a] > result[b] ? a: b
});

console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);