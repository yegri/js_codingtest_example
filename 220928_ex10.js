// 문제10 : 별 찍기

// 크리스마스 트리 만들기

for(let i=0; i < 5; i++){
    for(let j=4 ; j > i; j--){
        document.write('&bsp');
    }
    for(let j=0 ; 0 <= 2*i - 1; j++){
        document.write('*');
    }
    document.write('<br>');
}