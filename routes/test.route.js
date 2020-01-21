import { Router } from 'express';
import { check, validationResult } from 'express-validator';
const router = Router();

import { test, api, postMalone } from '../controllers/test.controller';

router.get('/test', test); 

router.get('/api', api);

router.use('/malone', 
[check('ozzy').notEmpty().withMessage('Ozzy param is required!')], 
(req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }
    next()
})

router.post('malone', postMalone);

module.exports = router;