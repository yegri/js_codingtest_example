// 문제 38 : 호준이의 아르바이트

// 1~3위 학생 중 중복되는 학생까지 포함하여 사탕을 사기로 함
// 학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생 수 출력

// const score = prompt('학생들 점수 입력').split(' ');

// const sorted = score.sort();

// const result = '';

// for(i=0 ; i < sorted.length ; i++){
//     console.log(sorted[i]);
// }



const scores = prompt('점수입력').split(' ').map(function(n){  
    return parseInt(n,10); // map을 통해 정수로 만듦
});

scores.sort((a,b) => {
    return a-b;
});

let count = 0;
let arr = [];

while (arr.length < 3){     // 1등에서 3등까지 3가지 점수만 들어가기 때문에 3이 되면 그만둠
    let n = scores.pop();   // 배열의 마지막 값 뺀 것을 n에 넣음
    if(!arr.includes(n)){   
        arr.push(n);        // n 값이 없으면 n값을 배열 마지막에 넣음
    }
    count += 1;             // while문이 회전하는 숫자는 1등부터 3등까지 정수만큼 반복되므로
}

console.log(count);