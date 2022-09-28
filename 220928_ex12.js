// 문제12: 게임 캐릭터 클래스 만들기

// 다음 소스코드에서 클래스를 작성하여 게임 캐릭터의 능력치와 '파이어볼'이 출력되게 만드시오.
// 주어진 소스 코드를 수정해선 안됩니다.

//데이터
class Wizard{
    constructor (health,mana,armor) {
        this.health = health;
        this.mana = mana;
        this.armor = armor;
    }
    attack(){
        return '파이어볼';      // 답안: console.log('파이어볼');
    }
};

const x = new Wizard(545,210,10);
console.log(x.health,x.mana,x.armor);

x.attack();
console.log(x.attack());    // attack()에 console.log 넣으면 이것 쓸 필요 없음
