const router = require('express').Router();

router.get('/', function (req, res) {
    res.render('index');
});


router.get('/playgame', function (req, res) {
    res.render('playgame');
});

module.exports = router;