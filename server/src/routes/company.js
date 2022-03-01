const { Router } = require('express');
const router = Router();
const { companyGet, companyPost, companyPatch, companyDel, companyGetId } = require('../controllers/company');
const { flightGet, flightGetId, flightPost, flightDel, flightPatch } = require('../controllers/flight');

//company
router.route('/company').get(companyGet).post(companyPost);
router.route('/company/:id').patch(companyPatch).delete(companyDel).get(companyGetId);


// Flights

router.route("/flight").get(flightGet).post(flightPost)
router.route("/flight/:id").patch(flightPatch).delete(flightDel).get(flightGetId);
module.exports = router