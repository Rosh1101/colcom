import React, { useState } from "react";
import "./issue.css";

const START_ISSUES = [
  {
    title: "Broken Light in Library",
    desc: "The ceiling light in the main library reading hall is flickering.", 
    category: "Maintenance",
    location: "Main Library",
    date: "Nov 14, 2025",
    status: "Open"
  },
  {
    title: "Security Alert at Hostel",
    desc: "Unauthorized access reported near boys hostel entrance.", 
    category: "Safety",
    location: "Boys hostel",
    date: "Nov 13, 2025",
    status: "Investigating"
  },
  {
    title: "Printer Out of Order",
    desc: " printer in the transport office isn't working since yesterday.",
    category: "Technical",
    location: "A Block",
    date: "Nov 12, 2025",
    status: "Resolved"
  }
];

export default function Issues() {
  const [issues, setIssues] = useState(START_ISSUES);
  const [form, setForm] = useState({
    title: '',
    category: 'Select',
    location: '',
    desc: ''
  });
  const [msg, setMsg] = useState(null); const [err, setErr] = useState(null);

  const handleInput = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setMsg(null); setErr(null);
  };

  const submit = e => {
    e.preventDefault();
    if (!form.title || !form.desc || !form.location || form.category === 'Select') {
      setErr("Please fill out all fields and select a category.");
      return;
    }
    const newIssue = {
      ...form,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      status: "Open"
    };
    setIssues([newIssue, ...issues]);
    setForm({ title:'', category:'Select', location:'', desc:'' });
    setMsg("Issue submitted successfully!");
    setErr(null);
    setTimeout(() => setMsg(null), 3500);
  };

  return (
    <div className="back">
      <div className="container">
        <h2 className="title">Submit a Report</h2>
        <p className="subtitle">Fill out the form below to report a campus issue</p>
        <form onSubmit={submit} className="issue-form" autoComplete="off">
          <label htmlFor="title">Issue Title</label>
          <input name="title" value={form.title} onChange={handleInput} placeholder="Brief description of the issue" required autoFocus />
          <label htmlFor="category">Category</label>
          <select name="category" value={form.category} onChange={handleInput} required>
            <option value="Select">Select a category</option>
            <option value="Safety">Safety</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Cleanliness">Cleanliness</option>
            <option value="Technical">Technical</option>
          </select>
          <label htmlFor="location">Location</label>
          <input name="location" value={form.location} onChange={handleInput} placeholder="Where is this issue located?" required />
          <label htmlFor="desc">Description</label>
          <textarea name="desc" value={form.desc} onChange={handleInput} placeholder="Provide detailed information about the issue" required />
          <button className="submit-btn" type="submit">Submit Issue</button>
        </form>
        {msg && <div className="success-message">{msg}</div>}
        {err && <div className="error-message">{err}</div>}
      </div>

      <div className="recent-container">
        <h2 className="recent-title">Recent Issues</h2>
        <div className="issue-list">
          {issues.map((iss, i) => (
            <div className="issue-card" key={i} tabIndex={0} title={iss.desc}>
              <div className="issue-title">{iss.title}</div>
              <div className="issue-desc">{iss.desc}</div>
              <div className="issue-meta">
                <span className="tag">{iss.category}</span>
                <span className="location">{iss.location}</span>
                <span className="date">{iss.date}</span>
                <span className="status">{iss.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
