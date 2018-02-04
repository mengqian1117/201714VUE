function FF() {
    this.a="a";
}
FF.prototype.getA=function () {
    console.log(this.a);
};
//module.exports=FF;
module.exports={FF};
exports.FF=FF;
console.log(this);
//this就是exports

/*
(function () {
    let exports={};
    function FF() {
        this.a="a";
    }
    FF.prototype.getA=function () {
        console.log(this.a);
    };
    exports=module.exports=FF;
    return module.exports
})();
*/
