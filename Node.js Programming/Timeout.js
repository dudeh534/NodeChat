var i = 0;
var obj = {
  sec : i,
  owner : 'youngdo'
}
function sayHello(){
  console.log('obj',obj);
  obj.sec++;
}
var sI = setInterval(sayHello,1000);
if(obj.sec == equals(10)){
  clearInterval(sI);
}
