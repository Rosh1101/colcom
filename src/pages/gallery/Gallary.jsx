import React from 'react'
import './gallery.css'

const Gallary = () => {
  return (
        <div class="back"> 
        <header class="topbar">
    <h1>Campus Gallery</h1>
    <p>Explore moments and memories from campus life</p>
</header>

<section class="gallery-container">

    <div class="gallery-card">
        <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6" alt="Campus in Spring"/>
        <div class="content">
            <h2>Campus in Spring</h2>
            <p class="description">Beautiful cherry blossoms on the main quad</p>
            <div class="meta">
                <span class="tag">Nature</span>
                <span class="likes">🤍 245</span>
            </div>
        </div>
    </div>

    <div class="gallery-card">
        <img src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238" alt="Sports Day 2024"/>
        <div class="content">
            <h2>Sports Day 2024</h2>
            <p class="description">Annual inter-department sports competition</p>
            <div class="meta">
                <span class="tag">Events</span>
                <span class="likes">🤍 312</span>
            </div>
        </div>
    </div>

    <div class="gallery-card">
        <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6" alt="Library Study Session"/>
        <div class="content">
            <h2>Library Study Session</h2>
            <p class="description">Students collaborating on group projects</p>
            <div class="meta">
                <span class="tag">Academic</span>
                <span class="likes">🤍 189</span>
            </div>
        </div>
    </div>

</section>
    </div>
  )
}

export default Gallary