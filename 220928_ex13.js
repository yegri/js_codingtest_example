// 문제13 : 몇 번째 행성인가요?

// 우리 태양계를 이루고 있는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성으로 총 8개
// 우리 태양계의 n번째 행성은?

// 입력: 1
// 출력: 수성

let number = 8;

let array = ['수성','금성','지구','화성','목성','토성','천왕성','해왕성'];

if(number === 1){
    console.log('수성');
}else if(number === 2){
    console.log('금성');
}else if(number === 3){
    console.log('지구');
}else if(number === 4){
    console.log('화성');
}else if(number === 5){
    console.log('목성');
}else if(number === 6){
    console.log('토성');
}else if(number === 7){
    console.log('천왕성');
}else{
    console.log('해왕성');
};

// 답안

// const planets = ['수성','금성','지구','화성','목성','토성','천왕성','해왕성'];
// const n = prompt('몇 번째 행성인가요?;);

// console.log(planets[n-1]);
