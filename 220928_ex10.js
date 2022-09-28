// 문제10 : 별 찍기

// 크리스마스 트리 만들기

const n = 5;
let tree = '';

for(i=1; i<= n; i ++){
    let star = '';
    for(let j = 1; j <= n-i; j ++){
        star += ' ';
    }
    for(let j = 1; j<=2*i-1 ; j ++){
        star += '*';
    }
    tree += star + '\n';
}

console.log(tree);
