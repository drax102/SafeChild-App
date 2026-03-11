const Alert = require('../models/Alert');

// @desc    Get all alerts for a parent
// @route   GET /api/alerts/:parentId
// @access  Private
exports.getAlerts = async (req, res) => {
    try {
        // Make sure parentId matches req.user.id for security
        if (req.params.parentId !== req.user.id.toString()) {
            return res.status(401).json({ error: 'Not authorized to get these alerts' });
        }

        const alerts = await Alert.find({ parentId: req.params.parentId })
            .populate('childId', 'name')
            .sort('-createdAt');

        res.status(200).json({ success: true, data: alerts });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// @desc    Mark an alert as read
// @route   PUT /api/alerts/:id/read
// @access  Private
exports.markAsRead = async (req, res) => {
    try {
        const alert = await Alert.findById(req.params.id);
        if (!alert) return res.status(404).json({ error: 'Alert not found' });

        alert.isRead = true;
        await alert.save();
        res.status(200).json({ success: true, data: alert });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
