console.log(1);
/*
setTimeout(function () {
    console.log(2);
},1000);
process.nextTick(function () {
    console.log(3);
    process.nextTick(function () {
        console.log(4);
        process.nextTick(function () {
            console.log(5);
        })
    })
});
setTimeout(function () {console.log(6);},1000);
*/
