const { Router } = require('express');
const router = Router();
const { companyGet, companyPost } = require('../controllers/company');

router.route('/').get(companyGet).post(companyPost);
// router.route('/:id').get('/');

module.exports = router