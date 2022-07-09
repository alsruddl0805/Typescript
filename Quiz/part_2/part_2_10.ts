// Part 2 _ 10 : Object index signatures

interface StringOnly {
    // name : string,
    // age : string,
    // location : string,
    // ======> 
    [key : string] : string,
}

let obejct :StringOnly = {
    name : 'kim',
    age : '20',
    locatio : 'seoul',
}

// ex ) Object 내부 Object
interface DoubleObj {
    // 'font-size' : {
    //     'font-size' : {
    //         'font-size' : 14
    //     }
    // }
    // ======> 
    'font-size' : DoubleObj | number,
}

let doubleObject :DoubleObj = {
    'font-size' : {
        'font-size' : {
            'font-size' : 14
        }
    }
}

// =======================

/*
Q1. 다음 자료의 타입을 지정해보십시오. 

let obj = {
  model : 'k5',
  brand : 'kia',
  price : 6000,
  year : 2030,
  date : '6월',
  percent : '5%',
  dealer : '김차장',
}
*/
type MyObj = {
    [key :string] : string | number,
}

/*
Q2. 다음 object 자료의 타입을 interface 써서 만들어보십시오. 

let obj = {
  'font-size' : 10,
  'secondary' : {
    'font-size' : 12,
    'third' : {
      'font-size' : 14
    }
  }
}
*/
interface MyObj2 {
    'font-size' : number,
    [key :string] : MyObj2 | number,
}

let obj :MyObj2 = {
    'font-size' : 10,
    'secondary' : {
      'font-size' : 12,
      'third' : {
        'font-size' : 14
      }
    }
  }

  console.log('recursive interface test : ',obj);
  