const express = require("express");
const controller = require("../controllers/tourController");

const router = express.Router();

router.route('/tour-stats').get(controller.getTourStats)
router.route('/top-5-tours').get(controller.aliasTopTours, controller.getAllTours)
router.route('/monthly-plan/:year').get(controller.getMonthlyPlan)
router.route("/").get(controller.getAllTours).post(controller.createTour);
router.route("/:id").get(controller.getTour).patch(controller.updateTour).delete(controller.deleteTour);

module.exports = router;
