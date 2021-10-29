// 변수를 '선언' 값을 변수에 '할당' 다시하면 '재할당'
// document는 html문서를 의미
document.write(1 + 1);

let child = "철수";
console.log(child);

child = "영희";
console.log(child);

const age = 13; // "13" 쌍다옴표 안에 있으면 문자이므로 계산이 안됨
console.log(age);
// 13 + 2 //15
// "안녕" + "하세요" // "안녕하세요"
// "안녕" + "13" // "안녕13"
// "안녕" + 13 // "안녕13"  어차피 계산이 안되고 에러가 나진않고 문자끼리 더한것과 같음

// age = 8  //const는 재할당 안됨!
// console.log(age)

const myMoney = 10000;
console.log(myMoney);
//vscode에서는 꼭 console.log써야하지만 개발자도구에서는 그냥 변수만 써도 값이 나옴
