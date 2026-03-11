const express = require('express');
const { logActivity, getActivityLogs } = require('../controllers/activityController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/log').post(logActivity); // Public for similation/device call
router.route('/:childId').get(protect, getActivityLogs);

module.exports = router;
