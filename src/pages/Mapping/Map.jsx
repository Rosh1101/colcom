import React, { useState } from "react";
import "./map.css";

const LOCATIONS = [
  {
    icon: "📚",
    color: "blue",
    title: "Main Library",
    tag: "Academic",
    desc: "24/7 study space with extensive resources",
  },
  {
    icon: "👥",
    color: "green",
    title: "Student Center",
    tag: "Common",
    desc: "Hub for student activities and services",
  },
  {
    icon: "🍽️",
    color: "yellow",
    title: "Cafeteria",
    tag: "Dining",
    desc: "Multiple dining options available",
  },
  {
    icon: "🧬",
    color: "purple",
    title: "Science Building",
    tag: "Academic",
    desc: "State-of-the-art laboratories and classrooms",
  },
  {
    icon: "🏋️",
    color: "red",
    title: "Sports Complex",
    tag: "Recreation",
    desc: "Gym, pool, and indoor sports facilities",
  },
  {
    icon: "🎭",
    color: "pink",
    title: "Arts Building",
    tag: "Academic",
    desc: "Theater, studios, and performance spaces",
  },
];

const TAGS = ["All", "Academic", "Common", "Dining", "Recreation"];

export default function Map() {
  const [filter, setFilter] = useState("All");

  const filteredLocations =
    filter === "All"
      ? LOCATIONS
      : LOCATIONS.filter((loc) => loc.tag === filter);

  return (
    <div>
      <h1 className="page-title">Campus Map</h1>
      <p className="subtitle">Explore all the key locations around campus</p>
      <div className="map-container">
        <div className="map-icon">🗺️</div>
        <h2>Interactive Map</h2>
        <p>Full interactive campus map coming soon!</p>
        <p>For now, explore the locations below:</p>
        <h3 className="locations-title">Campus Locations</h3>
        <div style={{ marginBottom: "24px", textAlign: "left" }}>
          {TAGS.map((tag) => (
            <button
              key={tag}
              style={{
                marginRight: "12px",
                padding: "7px 18px",
                borderRadius: "14px",
                border: "none",
                background: filter === tag ? "#4da3ff" : "#222",
                color: filter === tag ? "#fff" : "#bbb",
                fontWeight: "600",
                cursor: "pointer",
                boxShadow: filter === tag ? "0 2px 8px #4da3ff44" : "",
                transition: "background 0.18s, color 0.18s",
              }}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="cards-grid">
          {filteredLocations.map((loc, i) => (
            <div className="card" key={i}>
              <div className={`icon ${loc.color}`}>{loc.icon}</div>
              <h4>{loc.title}</h4>
              <span className="tag">{loc.tag}</span>
              <p>{loc.desc}</p>
              <a className="view-map" href="#">
                📍 View on map
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
