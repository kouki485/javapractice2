const date = new Date();
const month = date.getMonth() + 1;
const day = date.getDay();
const hour = date.getHours();
const min = date.getMinutes();
const sec = date.getSeconds();
const label = `${month}/${day}  ${hour}.${min}.${sec}`;

document.write(label);