// 문제34 : sort 구현하기

// 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램 작성
// 키는 공백으로 구분하여 입려됨

// const height = prompt('키 입력').split(' ');
// const heightSort = height.sort(); 

// if(height === heightSort){
//     console.log('YES');
// }else{
//     console.log('NO');
// }

// ----> 이렇게 하면 YES만 나옴

const unsorted = prompt('키를 입력하세요');
let sorted = '';

sorted = unsorted
    .split(' ')
    .sort(function(a,b){
        return a-b;         // 오름차순일 때 a-b / 내림차순일 때 b-a
    })
    .join(' ');

if(unsorted === sorted){
    console.log('YES');
}else{
    console.log('NO');
}
    