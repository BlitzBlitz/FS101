let nowDate = new Date();
console.log(nowDate);
let day = nowDate.getDay(); //get day of the week starts from 0
console.log(day);
let date = nowDate.getDate(); //get day of the month starts at 1
console.log(date);
let hours = nowDate.getHours();
console.log(hours);
let time = nowDate.getTime(); //get the timestamp   (the amount of the miliseconds passed from 1970)
console.log(time);
let pastDate = new Date(1679190000000);
console.log(pastDate);
