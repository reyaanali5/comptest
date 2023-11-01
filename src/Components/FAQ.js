import React from 'react';

function FAQ() {
    return (
        <div className="faq-container">
            <h1>Frequently Asked Questions</h1>

            <div className="faq-item">
                <h2>What is the website about?</h2>
                <p>'The Universe' provides users with information about our Solar System, daily images from NASA, and more!"</p>
            </div>

            <div className="faq-item">
                <h2>How do I signup or login on the website?</h2>
                <p>Navigate to the "SignUp" or "Login" button on the top of the homepage. Enter your credentials and follow the on-screen instructions.</p>
            </div>

            <div className="faq-item">
                <h2>How does the NASA picture of the day work?</h2>
                <p>Every day, our website fetches the "Picture of the Day" from NASA's API and displays it on our homepage. You can view detailed information about the image by clicking on it.</p>
            </div>
        </div>
    );
}

export default FAQ;