const express = require('express');
const router = express.Router();
const multer = require('multer');
const Post = require('../models/Post');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', upload.single('media'), async (req, res) => {
    const post = new Post({
        text: req.body.text,
        imageUrl: req.file ? `/uploads/${req.file.filename}` : null,
        videoUrl: req.file ? `/uploads/${req.file.filename}` : null
    });

    try {
        const newPost = await post.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
