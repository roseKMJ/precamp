Math.random();
// 0.3133936189763633    0~1사이의 숫자뽑기 Math.rondom()
Math.random() * 1000000;
// 349351.66904059023   6자리 숫자 뽑기위해 *1000000
Math.floor(Math.random() * 1000000);
// 674188               소숫점뒤에 숫자버리기 위해 Math.floor()

// 계속하다보면 6자리가 아니라 앞에0이 붙어서 5자리 4자리가 나올수 있음 때문에
// 고정된 6자리를 만들기 위해 padStart기능 사용해야함
// padStart는 문자열에서만 쓸 수 있는 기능이기 때문에 String으로 만든것임.

String(Math.floor(Math.random() * 1000000));
// '570820'
String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
// '925577'
String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
// '580449'
String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
// '413124'
String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
// '080923'
"aaa".padEnd(6, "0");
// 'aaa000'

// token 변수에 담았음 이미한번 변수에 담겼기 때문에 계속 같은값이 나옴
const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
// undefined
token;
// '149316'
token;
// '149316'
token;
// '149316'

//함수를 만들어서 함수를 실행하므로써 위의 문제 해결!
function getToken() {
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  console.log(token);
}
// undefined;
getToken();
// 680676
undefined;
getToken();
// 253708
undefined;
getToken();
// 524101
