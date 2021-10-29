180 / 60;
// 3 minutes가 되는부분
179 / 60;
// 2.9833333333333334  minutes가 되는부분
Math.floor(179 / 60);
// 2 소수점뒷자리를 버리기 위해 Math.floor사용
179 % 60;
// 59  secons가 되는부분

let time = 180; //초기값 설정

setInterval(function () {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  if (time >= 0) {
    console.log(minutes + ":" + seconds);
    time = time - 1;
  }
}, 1000);
