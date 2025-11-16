import React, { useState } from "react";
import axios from "axios";
import "./auth.css";

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState(null);

    async function submit(e) {
        e.preventDefault();
        try {
            const res = await axios.post("/api/auth/signup", { name, email });
            setMsg(res.data.message || "Signup successful!");
        } catch (err) {
            setMsg("Error: " + (err.response?.data?.message || "Could not signup."));
        }
    }

    return (
        <div className="auth-container">
            <h2 className="auth-title">Sign Up</h2>
            <form onSubmit={submit} className="auth-form">
                <input
                    className="auth-input"
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Name"
                    required
                    autoFocus
                />
                <input
                    className="auth-input"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <button type="submit" className="auth-btn">Signup</button>
            </form>
            <div className="auth-message" aria-live="polite">{msg}</div>
        </div>
    );
}
