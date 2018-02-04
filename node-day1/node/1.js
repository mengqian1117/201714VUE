console.log(1);
process.nextTick(function () {
    console.log("ha");
});
setImmediate(function () {
    console.log(333);
});