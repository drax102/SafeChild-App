const ChildDevice = require('../models/ChildDevice');

// @desc    Register a child device
// @route   POST /api/device/register
// @access  Private
exports.registerDevice = async (req, res) => {
    try {
        const { name, deviceType, identifier } = req.body;

        let device = await ChildDevice.findOne({ identifier });
        // If device exists, update parent maybe?
        if (device) return res.status(400).json({ error: 'Device already registered' });

        device = await ChildDevice.create({
            parentId: req.user.id,
            name,
            deviceType,
            identifier
        });

        res.status(201).json({ success: true, data: device });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// @desc    Get all devices for a parent
// @route   GET /api/device
// @access  Private
exports.getDevices = async (req, res) => {
    try {
        const devices = await ChildDevice.find({ parentId: req.user.id });
        res.status(200).json({ success: true, data: devices });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
