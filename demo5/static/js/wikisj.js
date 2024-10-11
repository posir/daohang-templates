/* ----

小窝存活时间
---- */
function siteTime(){
window.setTimeout("siteTime()", 1000);
var seconds = 1000
var minutes = seconds * 60
var hours = minutes * 60
var days = hours * 24
var years = days * 365
var today = new Date()
var todayYear = today.getFullYear()
var todayMonth = today.getMonth()
var todayDate = today.getDate()
var todayHour = today.getHours()
var todayMinute = today.getMinutes()
var todaySecond = today.getSeconds()
/* Date.UTC() -- 返回date对象距世界标准时间(UTC)1970年1月1日午夜之间的毫秒数(时间戳) 
year - 作为date对象的年份,为4位年份值
month - 0-11之间的整数,做为date对象的月份
day - 1-31之间的整数,做为date对象的天数
hours - 0(午夜24点)-23之间的整数,做为date对象的小时数
minutes - 0-59之间的整数,做为date对象的分钟数
seconds - 0-59之间的整数,做为date对象的秒数
microseconds - 0-999之间的整数,做为date对象的毫秒数 */
var t1 = Date.UTC(2020,6,28,00,00,00)
var t2 = Date.UTC(todayYear,todayMonth,todayDate,todayHour,todayMinute,todaySecond)
var diff = t2-t1
var diffYears = Math.floor(diff/years)
var diffDays = Math.floor((diff/days)-diffYears*365)
var diffHours = Math.floor((diff-(diffYears*365+diffDays)*days)/hours)
var diffMinutes = Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours)/minutes)
var diffSeconds = Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours-diffMinutes*minutes)/seconds)
document.getElementById("sitetime").innerHTML="<span>"+(diffYears*365+diffDays)+"</span> 天 <span>"+diffHours+"</span> 小时 <span>"+diffMinutes+"</span> 分钟 <span>"+diffSeconds+"</span> 秒"

}
siteTime()

/* 下雪特效 */
