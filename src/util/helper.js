let  printDate=function(){
    let a = new Date();
    console.log(a)
}
let printMonth=function(){
    let a = new Date();
    console.log(a.getMonth());
}
let getBatchInfo = function(){
    console.log("  ‘Thorium, W3D1, the topic for today is Nodejs module system’")  
}
module.exports.printDate=printDate
module.exports.printMonth=printMonth
module.exports.getBatchInfo=getBatchInfo