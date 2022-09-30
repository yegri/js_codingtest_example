// 문제29 : 대문자만 지나가세요

// 알파벳 하나만을 입력하고 그 알파벳이 대문자이면 YES 아니면 NO를 출력하는 프로그램 만들기

const alp = prompt('알파벳 하나만 입력');

const upper = alp.toUpperCase();  // alp에 입력된 문자를 대문자로 변환한 걸 upper에 담기

if(alp === upper){
    console.log('YES');
}else{
    console.log('NO');
}