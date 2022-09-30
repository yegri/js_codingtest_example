// 문제26 : 행성 문제 2

// 한글 이름 : 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성
// 영어 이름 : Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune

// 행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램 작성

// const k_name = prompt('행성의 한글 이름 입력');

// if(k_name == '수성'){
//     console.log('Mercury');
// }else if(k_name == '금성'){
//     console.log('Venus');
// }else if(k_name == '지구'){
//     console.log('Earth');
// }else if(k_name == '화성'){
//     console.log('Mars');
// }else if(k_name == '목성'){
//     console.log('Jupiterury');
// }else if(k_name == '토성'){
//     console.log('Saturn');
// }else if(k_name == '천왕성'){
//     console.log('Uranus');
// }else{
//     console.log('Neptune');
// };


// 답안지 답

const planets = {
    '수성' : 'Mercury',
    '금성' : 'Venus',
    '지구' : 'Earth',
    '화성' : 'Mars',
    '목성' : 'Jupiterury',
    '토성' : 'Saturn',
    '천왕성' : 'Uranus',
    '해왕성' : 'Neptune',
}

const name = prompt('행성의 이름을 입력하세요');
console.log(planets[name]);