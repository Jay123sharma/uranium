const express = require('express');  
const logger = require('../logger/logger.js');
const util = require('../util/helper.js')
const validator = require('../validator/formatter.js')
const router = express.Router();
const lodash = require('lodash');

router.get('/hello', function (req, res) {
// logger.welcome();
//     util.getBatchInfo()
    util.printDate();
    util.printMonth()
// validator.trim()
// validator.changetoLowerCase();
// validator.changetoupperCase();

let a=['jan','feb','mar','apr','may','june','july','aug','sep','oct','nov','dec']
console.log(lodash.chunk(a,3))

let b=[1,3,5,7,9,11,13,15,17,19]
console.log(lodash.tail(b));

let c=[1,2,3,4,9,]
let d=[1,147,3,4,9,]
let e=[85,2,3,4,9,]
let f=[123,2,8,95,9,]
let g=[42,2,3,4,9,]
console.log(lodash.union(c,d,e,f,g));

let h=[ ["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"] ]
console.log(lodash.fromPairs(h));
    res.send('my route')
});





module.exports = router;
// adding this comment for no reason
