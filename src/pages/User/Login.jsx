import React, { useState } from "react";
import axios from "axios";
import "./auth.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(null);

    async function submit(e) {
        e.preventDefault();
        try {
            const res = await axios.post("/api/auth/login", { email, password });
            setMessage(res.data.message || "Login successful!");
        } catch (err) {
            setMessage("Error: " + (err.response?.data?.message || "Could not login."));
        }
    }

    return (
        <div className="auth-container">
            <h2 className="auth-title">Log In</h2>
            <form onSubmit={submit} className="auth-form">
                <input
                    className="auth-input"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    autoFocus
                />
                <input
                    className="auth-input"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit" className="auth-btn">Login</button>
            </form>
            <div className="auth-message" aria-live="polite">{message}</div>
        </div>
    );
}