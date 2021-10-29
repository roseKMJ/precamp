if (1 + 1 === 2) {
  console.log("정답");
} else {
  console.log("틀림");
}
// VM1906:2 정답
// undefined
if (true) {
  console.log("정답");
} else {
  console.log("틀림");
}
// VM1998:2 정답
// undefined
if (1 + 1 === 3) {
  console.log("정답");
} else {
  console.log("틀림");
}
// VM2019:5 틀림
// undefined
if (1 + 1 === 3) {
  console.log("정답입니다");
}
// undefined
let age = 13;
// undefined
age;
// 13
if (age >= 20) {
  console.log("성인입니다");
} else if (age >= 8) {
  console.log("학생입니다");
} else {
  console.log("어린이입니다");
}
// VM2458:4 학생입니다
// undefined
const profile = {
  name: "철수",
  age: 7,
  school: "다람쥐초등학교",
};
// undefined
profile.age;
// 7
profile.name;
// '철수'
