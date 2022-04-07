const express = require('express');  
// const logger = require('../logger/logger.js');
// const util = require('../util/helper.js')
// const validator = require('../validator/formatter.js')
const router = express.Router();
// const lodash = require('lodash');

// const a = ["kgf","rrr",'bahubali','pushpa','radhe shyam']

router.get('/movies', function (req, res) {
    const a = ["kgf","rrr",'bahubali','pushpa','radhe shyam']

    res.send(a);
});
router.get('/movies/:b', function (req, res) {
    const a = ["kgf","rrr",'bahubali','pushpa','radhe shyam']
// console.log(req.params.b)
if(req.params.b<a.length){
    res.send(a[req.params.b]);
}else{
    res.send(' pls enter valid syntax ');
}
});
router.get('/films', function (req, res) {
    const  d =[ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
       res.send(d);
       
});
router.get('/films/:p', function (req, res) {
    const  d =[ {
        "id": 25,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 32,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
       for (let i = 0; i < d.length; i++) {
           if(d[i].id==req.params.p){
               res.send(d[i]);
           }  
       }
       for (let i = 0; i < d.length; i++) {
           if(d[i].id!==req.params.p){
               res.send(" pls enter valid id");
           }  
       }

       
});


module.exports = router;
// adding this comment for no reason
