import React, { useState } from 'react';
import axios from 'axios';

function PostForm() {
    const [text, setText] = useState('');
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('text', text);
        if (file) formData.append('media', file);

        try {
            await axios.post('http://localhost:5000/api/posts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setText('');
            setFile(null);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="What's on your mind?" />
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button type="submit">Send</button>
        </form>
    );
}

export default PostForm;
