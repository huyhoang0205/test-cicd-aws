const express = require('express');
const router = express.Router();

router.get('/checkstatus', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok'
    })
})

router.get('/api/users', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok',
        metadata: [
            {
                name: 'huyhoang',
                age: 22
            },
            {
                name: 'huyhoang1',
                age: 22
            },
            {
                name: 'huyhoang2',
                age: 22
            }
        ]
    })
})

module.exports = router;