setImmediate(function () {
    console.log(1);
});//等上一个队列执行完成之后立即执行的(下个队列的)

setTimeout(function () {
    console.log(2);
});

//异步的  当前队列最后执行的函数
//process.nextTick(回调函数)
function next() {
    console.log("我是最后执行的",a);
}
var a=1;
process.nextTick(next);
//异步 等当前队列执行完成之后再回来执行这个next
for (let i=0;i<100;i++){
    a+=i;
}
console.log(a);

