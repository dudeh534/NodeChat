function task1(callback){
    console.log('Task1 시작');


    callback();
}

task1(function(){
    console.log('callback 실행!');
    setTimeout(function(){
        console.log('Task1 끝');
    },3000);
});
console.log('Task2 시작');
