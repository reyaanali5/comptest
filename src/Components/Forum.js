import useAuth from '../hooks/useAuth';
import React, { useState, useEffect } from 'react';
import './Forum.css';

function Forum() {
    const { user } = useAuth();
    const [post, setPost] = useState('');
    const [comments, setComments] = useState([]);


    useEffect(() => {
        const storedComments = localStorage.getItem('forumComment');
        if (storedComments) {
            setComments(JSON.parse(storedComments));
        }
    }, []);

    const handlePost = () => {
        const newComments = [...comments, post];
        setComments(newComments);
        setPost('');
        localStorage.setItem('forumComment', JSON.stringify(newComments));
    };

    return (
        <div className="forum-container">
            <div className="title">Welcome,<span> post your best astronomical pictures!</span></div>
            {user ? (
                <div>
                    <div className="input">
                        <textarea value={post} onChange={(e) => setPost(e.target.value)} placeholder="Post something..."></textarea>
                    </div>
                    <button className="post-button" onClick={handlePost}>Post</button>
                </div>
            ) : (
                <p>You need to log in to post and comment.</p>
            )}

            <div className="comments-section">
                {comments.map((comment, index) => (
                    <div key={index} className="comment">
                        <p className="comment-text">{comment}</p>
                        {user && <button className="comment-button">Comment</button>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Forum;