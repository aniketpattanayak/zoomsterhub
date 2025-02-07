import React, { useState } from "react";
import emailjs from "emailjs-com";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      feedback,
      email,
    };

    emailjs
      .send(
        "service_oywpk0p",
        "template_rfzfaeo",
        templateParams,
        "r_QpI7QihqD9mJqNl"
      )
      .then(
        (response) => {
          console.log("Email successfully sent!", response.status, response.text);
          setSubmitted(true);
          setFeedback("");
          setEmail("");
        },
        (error) => {
          console.error("Email send failed:", error);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8 pt-40" id="feedback">
      <div className="max-w-2xl bg-white rounded-lg shadow-lg p-6 md:p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Feedback & Support</h1>
        <p className="text-gray-700 mb-6">
          If you have any concerns, complaints, or feedback regarding the content available on
          <a href="https://www.zoomsterhub.com" className="text-blue-500 hover:underline ml-1">www.zoomsterhub.com</a>,
          please feel free to reach out to our dedicated Support Team.
        </p>
        <p className="text-gray-700 mb-6">
          📧 Email: <a href="mailto:info@zoomsterhub.com" className="text-blue-500 hover:underline">info@zoomsterhub.com</a>
        </p>
        <p className="text-gray-700 mb-6">We highly value your input and are committed to providing the best possible assistance.</p>

        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Your Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your email address..."
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="feedback" className="block text-gray-700 font-medium mb-2">
                Your Feedback:
              </label>
              <textarea
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows="4"
                className="w-full border border-gray-300 rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write your feedback here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit Feedback
            </button>
          </form>
        ) : (
          <div className="text-center">
            <h2 className="text-xl font-bold text-green-600 mb-4">Thank You!</h2>
            <p className="text-gray-700">Your feedback has been submitted successfully. We appreciate your input!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedback;
