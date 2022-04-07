const express = require('express');
// const router =router.express() ;ls

const logger = require('../logger')

router.get('/test-me', function (req, res) {
    logger.welcome()
    res.send('my first route')
});

module.exports = router;
// adding this comment for no reason