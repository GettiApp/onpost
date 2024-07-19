const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    text: String,
    imageUrl: String,
    videoUrl: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', PostSchema);
