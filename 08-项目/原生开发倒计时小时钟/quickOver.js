// 直接用时间段来执行倒计时
let countdown;
function timer(seconds) {
  countdown = setInterval(() => {
    const secondsLeft = Math.round(seconds)
    seconds--
    if(secondsLeft < 0) {
      clearInterval(countdown)
      return ;
    }
    console.log(seconds)

  }, 1000) // 每隔一秒调用一次 setInterval 函数
}

timer(222)