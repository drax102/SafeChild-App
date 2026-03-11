const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
    parentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    childId: { type: mongoose.Schema.Types.ObjectId, ref: 'ChildDevice', required: true },
    alertType: { type: String, enum: ['adult_content', 'excessive_screen_time', 'unknown_call', 'vulgar_language'], required: true },
    message: { type: String, required: true },
    isRead: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Alert', alertSchema);
