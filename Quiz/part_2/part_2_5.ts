// Part 2 _ 5 : class에서 사용가능한 protected, static 키워드

class User3 {
    // private, protected 붙이면 class{} 안에서만 사용 가능
    /*
    private : 현재 class{} 내부에서만 사용 가능
    protected : extends된 class안에서도 사용 가능 (자식은 불가능)
    */
    protected x = 10;
}

class NewUser extends User3 {
    y = 20;
}

let newUser = new NewUser();
console.log('extends ?', newUser);

class User4 {
    // static 키워드를 붙이면 부모 class에 직접부여됨 + 자식에게 안물려줌
    static x = 10;
    y = 20;
}

let user4 = new User4();
console.log(user4.y) // x는 물려주지 않기 때문에 확인할 수 없음


// ==========================================

//Q1. 다음 x, y, z 속성의 특징을 설명해보십시오.
class User5 {
    // private static x = 10; // 해당 class에서만 사용할 수 있는 클래스의 고유 변수?
    public static y = 20; // 어떤곳에서든 쓸 수 있는 고유 변수
    protected z = 30; // 자식에겐 물려주지 안지만, extend 된 class에서 사용가능하다
  }

/*
Q2. class User {
  private static x = 10;
  public static y = 20;
}
User.addOne(3) //이렇게 하면 x가 3 더해져야함
User.addOne(4) //이렇게 하면 x가 4 더해져야함
User.printX()  //이렇게 하면 콘솔창에 x값이 출력되어야함
저렇게 User.addOne() 쓸 때마다 x가 증가하는 함수는 어떻게 만들 수 있을까요? 
그리고 x값을 콘솔창에 출력해주는 printX() 함수도 한번 만들어보십시오.
(조건) private static x = 10; 이 코드 수정금지 
*/

// class addNum {
//     private static x = 10;
//     public static y = 20;

//     addOne(num :number) :number {
//         this.x += num;
//     }
//     printX() {
//         console.log(this.x);
//     }
//   }

/*
Q3. 
let 네모 = new Square(30, 30, 'red');
네모.draw()
네모.draw()
네모.draw()
네모.draw()

네모.draw()를 할 때마다
index.html에 가로 30px, 세로 30px, 배경색이 'red' 의 <div> 박스가
가로 400px 세로 400px 공간 안에 무작위로 배치되어야합니다.
*/

class Square{
    width :number;
    height :number;
    color :string;

    constructor(w :number, h :number, c :string) {
        this.width = w;
        this.height = h;
        this.color = c;
    }

    draw() {
        let box = document.querySelector('.wrap');
        if (box instanceof Element) {
            let redBox = document.createElement('div');
            redBox.style.width = this.width + 'px';
            redBox.style.height = this.height + 'px';
            redBox.style.backgroundColor = this.color;

            box.append(redBox);
        }        
    }
}

let createSquare = new Square(30, 30, 'red');
createSquare.draw();
createSquare.draw();
createSquare.draw();
createSquare.draw();
createSquare.draw();