const { Router } = require('express');
const router = Router();
const { companyGet, companyPost, companyPatch, companyDel, companyGetId } = require('../controllers/company');
const { flightGet, flightPost, flightDel, flightPatch } = require('../controllers/flight');

//company
router.route('/').get(companyGet).post(companyPost);
router.route('/:id').patch(companyPatch).delete(companyDel).get(companyGetId)


// Flights

router.route("/flight").get(flightGet).post(flightPost)
// router.route("/flight/:id").get(flig)
module.exports = router