import useAuth from '../hooks/useAuth'; 
import React, { useState } from 'react';
import './Forum.css';

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
