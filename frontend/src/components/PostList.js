import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/posts');
                setPosts(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchPosts();
    }, []);

    return (
        <div>
            {posts.map(post => (
                <div key={post._id}>
                    <p>{post.text}</p>
                    {post.imageUrl && <img src={`http://localhost:5000${post.imageUrl}`} alt="post" />}
                    {post.videoUrl && <video src={`http://localhost:5000${post.videoUrl}`} controls />}
                </div>
            ))}
        </div>
    );
}

export default PostList;
