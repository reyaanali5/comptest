import useAuth from '../hooks/useAuth'; 
import React, { useState } from 'react';

function Forum() {
    const { user } = useAuth();
    const [post, setPost] = useState('');
    const [comments, setComments] = useState([]);

    const handlePost = () => {
        setComments([...comments, post]);
        setPost('');
    };

    return (
        <div className="forum-container">
            {user ? (
                <div>
                    <textarea value={post} onChange={(e) => setPost(e.target.value)} placeholder="Post something..."></textarea>
                    <button onClick={handlePost}>Post</button>
                </div>
            ) : (
                <p>You need to log in to post and comment.</p>
            )}

            <div className="comments-section">
                {comments.map((comment, index) => (
                    <div key={index} className="comment">
                        {comment}
                        {user && <button>Comment</button>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Forum;
