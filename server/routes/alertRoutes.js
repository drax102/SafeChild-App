const express = require('express');
const { getAlerts, markAsRead } = require('../controllers/alertController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/:parentId').get(protect, getAlerts);
router.route('/:id/read').put(protect, markAsRead);

module.exports = router;
