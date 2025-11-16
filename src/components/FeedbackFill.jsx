import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../pages/feedback/feedback.css";

export default function FeedbackFill() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    answer: "",
    comment: "",
  });
  const [msg, setMsg] = useState(null);

  function handleInput(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setMsg(null);
  }

  function submitFeedback(e) {
    e.preventDefault();
    if (!form.answer) {
      setMsg("Please select a rating.");
      return;
    }

    setTimeout(() => {
      setMsg("Thank you for your feedback!");
      setTimeout(() => navigate("/feedback"), 1400);
    }, 900);
  }

  return (
    <div className="feedback-bg">
      <div className="feedback-header">
        <h2>Submit Feedback</h2>
        <div className="fc-title">Survey ID: <b>{id}</b></div>
      </div>
      <form className="feedback-form"
            onSubmit={submitFeedback}
            style={{
              margin: "0 auto",
              maxWidth: 410,
              background: "#181818",
              borderRadius: 17,
              boxShadow: "0 5px 22px #4da3ff11",
              padding: "36px 30px 28px 30px",
              animation: "cardFadeIn 1.05s"
            }}>
        <label className="fc-desc" style={{ fontWeight: 500, marginBottom: 8 }}>How satisfied are you with this area?</label>
        <div className="feedback-radios">
          {["Very Satisfied", "Satisfied", "Neutral", "Unsatisfied", "Very Unsatisfied"].map(val => (
            <label key={val} className="ff-radio">
              <input
                type="radio"
                name="answer"
                value={val}
                checked={form.answer === val}
                onChange={handleInput}
              />
              <span>{val}</span>
            </label>
          ))}
        </div>
        <label className="fc-desc" style={{marginTop:16}}>Additional Comments</label>
        <textarea
          className="ff-comment"
          name="comment"
          value={form.comment}
          onChange={handleInput}
          placeholder="Type your comments here (optional)..."
          rows={3}
        />
        <button className="fc-action due-btn" style={{ marginTop: 18 }}>Submit Feedback</button>
        {msg && <div style={{
          color: msg.startsWith("Thank") ? "#34d399" : "#fb7185",
          marginTop: 14,
          textAlign: "center",
          fontWeight: 600
        }}>{msg}</div>}
      </form>
    </div>
  );
}
