import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("/api")
      .then(r => setData(r.data))
      .catch(() => setData({ message: "Backend not available" }));
  }, []);

  return (
    <div className="home-bg">
      <main className="home-main">
        <section className="hero">
          <h1 className="hero-title">
            Welcome to <br /><span className="brand-highlight">ColCom</span>
          </h1>
          <p className="hero-subtitle">
            Your all-in-one platform for campus life. Report issues, explore communities,<br />
            and stay connected with everything happening on campus.
          </p>
          <div className="hero-buttons">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">Explore Communities</button>
          </div>
        </section>
        <section className="stats">
          <div className="stat-card">
            <div className="icon">✨</div>
            <h2>2,500+</h2>
            <p>Active Students</p>
          </div>
          <div className="stat-card">
            <div className="icon">✅</div>
            <h2>1,200+</h2>
            <p>Issues Resolved</p>
          </div>
          <div className="stat-card">
            <div className="icon">🌐</div>
            <h2>50+</h2>
            <p>Communities</p>
          </div>
        </section>
   {/*      {data &&
          <pre className="api-preview">
            {JSON.stringify(data, null, 2)}
          </pre>
        } */}
      </main>
    </div>
  );
}
