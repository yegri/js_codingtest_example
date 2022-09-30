// 문제28 : 2-gram

// 2-gram : 문자열에서 2개의 연속된 요소를 출력하는 방법

// 입력으로 문자열이 주어지면 2-gram으로 출력하는 프로그램 작성

const text = prompt('문자열 입력').split('');

for(let i=0 ; i < text.length -1; i++){
    console.log(text[i],text[i+1]);
}
