import "./styles.css";

// 1. js에서도 클래스 사용 가능
// 2. 보통 1개의 파일에 1개의 클래스 지정
// 3. js oop적으로 사용하기 위해서 class를 사용했는데 
//   js와 oop가 맞지 않아서 요즘은용class를 잘 사용하지 않음
//   => function 기반으로 많이 사용
// 4. this 사용시 내부에서 실질적으로 저장할 경우에 _ 사용
//    => _를 사용해서 set, get 사용함

// (1). 클래스 선언
class Person1{
  // 생성자 : 클래스 생성시 매개변수 받을지 안받을지 지정
  constructor(name, age){
    this._name = name;
    this._age = age;
  }

  set name(text){
  this._name = text;
  }
    
  get name(){
    return this._name;
  }
}

const A = new Person1("al", 10);

console.log(A);
// 자동으로 set 함수 실행
A.name = "qwq";
console.log(A);


// (2). 함수 생성 (나중에 다시 확인)
/* 
function Person2(name, age){
  this._name = name;
  this._age = age;

  return(
    function SetName(text){
      this._name = text;
    },
    function GetName(){
      return this._name;
    }
  );
}

const B = Person2("aka", 10);

console.log(B);
B.SetName("1020");
console.log(B);
*/


