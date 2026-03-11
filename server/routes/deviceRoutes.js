const express = require('express');
const { registerDevice, getDevices } = require('../controllers/deviceController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').get(protect, getDevices);
router.route('/register').post(protect, registerDevice);

module.exports = router;
