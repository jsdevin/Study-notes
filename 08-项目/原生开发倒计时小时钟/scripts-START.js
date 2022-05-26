// 获取html页面中的元素
const timeDisplay = document.querySelector('.display__time-left')
const endTimeDisplay = document.querySelector('.display__end-time')
const buttons = document.querySelectorAll('[data-time]')

// 设置倒计时的函数
let countdown;
function timer(seconds) { // 传入的参数将会是多少多少秒，seconds 代表的是需要倒计时的时间段，比如说40分钟

// 错误逻辑：这样子设置的话，setInterval 函数里面的所有量都是定值，无法完成倒计时的要求。
  // countdown = setInterval(() => {
  //   const secondsLeft = Math.round(seconds)
  //   if(secondsLeft < 0) {
  //     clearInterval(countdown)
  //     return ;
  //   }
  //   console.log(secondsLeft)

  // }, 1000) // 每隔一秒调用一次 setInterval 函数
  
  clearInterval(countdown) // 多个倒计时运行时触发，会清除前一个倒计时，只保留当前的
  showAllTime(seconds)

  const now = Date.now() // 记录的是此刻的时间，单位是毫秒，表现形式是一串数字
  const endTime = now + seconds * 1000 // 完成倒计时的时间。单位是毫秒
  showEndTime(endTime)
  countdown = setInterval(() => { // 将会在这里完成倒计时
    // 倒计时的核心就在这里：Date.now()在这里相当于一个变量，每隔一秒调用一次函数setInterval，Date.now()获得的那一串数字也相应地减少一秒，实现倒计时减少
    const allSeconds = Math.round((endTime - Date.now()) / 1000) // 剩下的总秒数。单位是秒
    
    if(allSeconds < 0) { // 秒数小于0，代表倒计时结束。退出逻辑。
      clearInterval(countdown)
      return ;
    }

    showAllTime(allSeconds)

  }, 1000); // 1000ms = 1s, 每隔一秒调用一次函数setInterval

}

// 展示剩余的所有秒数的函数
function showAllTime(seconds) {
  // 展示剩余的分钟
  const min = Math.floor(seconds / 60)
  // 展示剩余的秒数
  let allSeconds = seconds % 60 // ‘:’后面的展示秒数要小于60秒

  // 最终合起来的展示形式
  const display = `${min}:${allSeconds < 10 ? 0 : ''}${allSeconds}`
  // console.log(display)

  // 展示到html页面
  timeDisplay.textContent = display

  document.title = display // 展示到网页的title上面,即浏览器的标签上面

}


// 展示最终完成倒计时的时间
function showEndTime(endTime) { // 传入的是完成倒计时的时间戳
  const Time = new Date(endTime) // 将时间戳转换为z中国标准时间。格式： `星期 月份 日期 年份 几时几分几秒 GMT+0800`
  const hours = Time.getHours()
  const minutes = Time.getMinutes()
  
  // 设置展示形式
  const display = `在${hours}:${minutes < 0 ? 0 : ''}${minutes}完成倒计时`
  endTimeDisplay.textContent = display

}


function startTimer() {
  const seconds = this.dataset.time
  timer(seconds)
}

// 快捷按钮逻辑
buttons.forEach(button => button.addEventListener('click', startTimer))

// 输入框逻辑
document.customForm.addEventListener('submit', function(e) {
  e.preventDefault() // 阻止默认行为
  // 获取输入框输入的时间
  const minutes = this.minutes.value

  // 启动倒计时函数 timer
  timer(minutes * 60) // 参数的单位需要时秒
})

