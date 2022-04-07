let trim = function(){
    let a = '    functionup    '
    let b = a.trim();
    console.log(b);
}
let changetoLowerCase=function(){
    let a='GHFGDFGVBJHGFWERWFDFGHJHJGHGHFHGV'
    let b=a.toLowerCase();
    console.log(b);
}
let changetoupperCase=function(){
    let a='hello this is jay sharma'
    let b=a.toUpperCase();
    console.log(b);
}
module.exports.trim=trim
module.exports.changetoLowerCase=changetoLowerCase
module.exports.changetoupperCase=changetoupperCase