// Part 2 _ 9 : implements 키워드 (class type check with interface + implements)

interface CarType {
    model : string,
    price : number,
}

class Cars implements CarType { // 이 class가 이 interface에 있는 속성을 다 들고있는가? (확인용)
    model : string;
    price : number = 1000;
    constructor(a :string){
      this.model = a
    }
  }

let myCar = new Cars('morning'); 