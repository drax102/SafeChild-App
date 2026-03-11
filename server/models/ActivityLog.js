const mongoose = require('mongoose');

const activityLogSchema = new mongoose.Schema({
    childId: { type: mongoose.Schema.Types.ObjectId, ref: 'ChildDevice', required: true },
    activityType: { type: String, enum: ['app_usage', 'website_visit', 'keyword'], required: true },
    content: { type: String, required: true }, // App name, URL, or keyword typed
    duration: { type: Number, default: 0 }, // in minutes (for app_usage or website_visit)
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ActivityLog', activityLogSchema);
