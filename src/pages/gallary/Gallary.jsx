import React from "react";
import "./gallery.css";

const GALLERY_IMAGES = [
  {
    src: "https://cdn-ilakggn.nitrocdn.com/qfLlPHxtFDGRhIOUKhiZcDNvbHvEtWcT/assets/images/optimized/rev-976a022/www.krmangalam.edu.in/wp-content/uploads/2025/11/IMG_6959-1-600x400.webp",
    title: "Idea 3.0",
    desc: "Models in College presenting themselves with confidence",
    tag: "Event",
    likes: 245,
  },
  {
    src: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238",
    title: "Sports Day 2024",
    desc: "Annual inter-department sports competition",
    tag: "Events",
    likes: 312,
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "Library Study Session",
    desc: "Students collaborating on group projects",
    tag: "Academic",
    likes: 189,
  },
  {
    src: "https://images.unsplash.com/photo-1464983953574-0892a716854b",
    title: "Evening by the Lake",
    desc: "Stunning sunset over the lake view point",
    tag: "Nature",
    likes: 200,
  },
  {
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    title: "Tech Symposium",
    desc: "Campus-wide technology fair and workshops",
    tag: "Tech",
    likes: 159,
  },
  {
    src: "https://images.unsplash.com/photo-1503676382389-4809596d5290",
    title: "Graduation Day",
    desc: "Celebrating a class of achievers!",
    tag: "Events",
    likes: 342,
  },
];

export default function Gallery() {
  return (
    <div className="back">
      <header className="topbar">
        <h1>Campus Gallery</h1>
        <p>Explore moments and memories from campus life</p>
      </header>
      <section className="gallery-container">
        {GALLERY_IMAGES.map((img, i) => (
          <div
            className="gallery-card fadein"
            key={i}
            style={{
              animationDelay: `${0.2 + i * 0.1}s`,
            }}
          >
            <img src={img.src} alt={img.title} loading="lazy" />
            <div className="content">
              <h2>{img.title}</h2>
              <p className="description">{img.desc}</p>
              <div className="meta">
                <span className="tag">{img.tag}</span>
                <span className="likes">❤️ {img.likes}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
