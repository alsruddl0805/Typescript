// Part 2 _ 4 : public, private

class User2 {
    // public = 모든 자식들이 해당 변수 사용 가능 (있으나 없으나 원래 숨겨져있음)
    name :string = 'kim';
    // private = 자식들이 수정 불가능 (클래스 내부에서만 수정 가능)
    private name2 :string = 'kim2';
    constructor(a :string) {
        this.name = a;
    }
    modifyName(newName :string) {
        this.name2 = newName;
    }
}

let nameTest = new User2('aaaa');
// name2.name2 = '바꿔보기';
// 자식들이 수정 가능하게 하려면 ? 
nameTest.modifyName('바꿔졌나용');