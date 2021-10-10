const router = require('express').Router();

const example = require('./example.routes');
const pdf = require('./pdf.routes');

router.use('/example', example);
router.use('/pdf', pdf);

module.exports = router;
