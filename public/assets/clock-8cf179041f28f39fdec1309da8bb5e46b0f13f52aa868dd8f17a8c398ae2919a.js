function main(){time=new Date,clock.innerHTML=String(("0"+time.getHours()).slice(-2)+":"+("0"+time.getMinutes()).slice(-2)+":"+("0"+time.getSeconds()).slice(-2)).bold().fontsize(12),setTimeout(main,1e3-time.getMilliseconds())}function sub(){today=new Date,day.innerHTML=String(today.getFullYear()+"\u5e74"+(today.getMonth()+1)+"\u6708"+("0"+today.getDate()).slice(-2)+"\u65e5"+week+"\u66dc\u65e5")}var time,today,clock=document.getElementById("clock");main();var day=document.getElementById("day"),week="\u65e5\u6708\u706b\u6c34\u6728\u91d1\u571f"[(new Date).getDay()];sub();