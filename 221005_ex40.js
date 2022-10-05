// 문제 40 : 놀이동산에 가자

// 모든 놀이기구는 한 번에 타는 인원수에는 제한이 없지만 제한 무게를 넘으면 무조건 다음 기구를 타야합니다.

// 원범이와 친구들이 총 몇 명 탈 수 있는지 알 수 있는 프로그램 작성

// 첫번째 입력: 제한 무게
// 두번째 입력: 함께한 친구들의 수(n)
// 세번째 입력~: 탑승할 친구들의 몸무게 (무작위)

let total = 0;
let count = 0;
const limit = prompt('제한 무게를 입력하세요.');
const n = prompt('인원수를 입력하세요.');

for (let i=1; i<=n; i++){
  total += parseInt(prompt('무게를 입력해주세요.'), 10); // total에 값을 계속 더함
  if (total <= limit){
		count = i;      // total이 제한 무게 보다 작거나 같을 경우에만 count 변수에 i 할당
  }
}
console.log(count);
