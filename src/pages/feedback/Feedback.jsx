import React from "react";
import { useNavigate } from "react-router-dom";
import "./feedback.css";

const FEEDBACKS = [
  {
    id: "fb-due-1",
    title: "Course Evaluation - Data Structures",
    status: "Due",
    description: "Help us improve the course content and teaching.",
    dueDate: "Due: Nov 18, 2025",
  },
  {
    id: "fb-comp-2",
    title: "Hostel Facilities Survey",
    status: "Completed",
    description: "Tell us how you feel about your hostel experience.",
    dueDate: "Completed: Oct 30, 2025",
  },
];

export default function Feedback() {
  const navigate = useNavigate();

  return (
    <div className="feedback-bg">
      <div className="feedback-header">
        <h1>Feedback</h1>
        <p>Your opinions make campus better. Tap to fill or review survey charts.</p>
      </div>
      <div className="feedback-cards">
        {FEEDBACKS.map((f, i) => (
          <div
            className={`feedback-card fadein ${f.status === "Due" ? "due" : "completed"}`}
            key={f.id}
            style={{ animationDelay: `${0.18 + i * 0.13}s` }}
            tabIndex={0}
            role="button"
            aria-label={`${f.title} (${f.status})`}
            onClick={() =>
              f.status === "Due"
                ? navigate(`/feedback/fill/${f.id}`)
                : navigate(`/feedback/results/${f.id}`)
            }
          >
            <div className="fc-status">{f.status === "Due" ? "🕑 Due Now" : "✅ Completed"}</div>
            <div className="fc-title">{f.title}</div>
            <div className="fc-desc">{f.description}</div>
            <div className="fc-date">{f.dueDate}</div>
            {f.status === "Due" ? (
              <div className="fc-action due-btn">Fill Feedback</div>
            ) : (
              <div className="fc-action comp-btn">View Results</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
