const ActivityLog = require('../models/ActivityLog');
const Alert = require('../models/Alert');
const ChildDevice = require('../models/ChildDevice');

// Simple logic to trigger alerts
const checkAndCreateAlert = async (childId, activityType, content) => {
    const device = await ChildDevice.findById(childId);
    if (!device) return;

    const parentId = device.parentId;
    let alertType = null;
    let message = '';

    const vulgarWords = ['shit', 'fuck', 'bitch']; // simplistic simulated list
    const adultSites = ['pornhub.com', 'xvideos.com']; // simplistic simulated list

    if (activityType === 'keyword') {
        vulgarWords.forEach(word => {
            if (content.toLowerCase().includes(word)) {
                alertType = 'vulgar_language';
                message = `Vulgar language detected: ${content}`;
            }
        });
    } else if (activityType === 'website_visit') {
        adultSites.forEach(site => {
            if (content.toLowerCase().includes(site)) {
                alertType = 'adult_content';
                message = `Adult website visited: ${content}`;
            }
        });
    } else if (activityType === 'unknown_call') { // Simulated activityType
        alertType = 'unknown_call';
        message = `Unknown phone number call simulated: ${content}`;
    }

    if (alertType) {
        await Alert.create({
            parentId,
            childId,
            alertType,
            message
        });
    }
};

// @desc    Log activity from device
// @route   POST /api/activity/log
// @access  Public (should use Device API Key in real world)
exports.logActivity = async (req, res) => {
    try {
        const { childId, activityType, content, duration } = req.body;

        const log = await ActivityLog.create({
            childId,
            activityType,
            content,
            duration
        });

        // Check for alerts
        await checkAndCreateAlert(childId, activityType, content);

        res.status(201).json({ success: true, data: log });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// @desc    Get activity logs for a child
// @route   GET /api/activity/:childId
// @access  Private
exports.getActivityLogs = async (req, res) => {
    try {
        const logs = await ActivityLog.find({ childId: req.params.childId }).sort('-timestamp');
        res.status(200).json({ success: true, data: logs });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
