import React from "react";
import './communities.css'

function Communities() {
    return(
           <div class="back">
            <header class="topbar">
        <h1>Student Communities</h1>
        <p>Connect with students who share your interests</p>
    </header>

    <section class="communities-container">

        <div class="community-card">
            <div class="card-header">
                <div class="avatar">👥</div>
                <span class="tag">Technology</span>
            </div>
            <h2>Tech Club</h2>
            <p class="description">For students passionate about technology, coding, and innovation</p>
            <p class="members">👤 245 members</p>
            <button class="join-btn">Join Community</button>
        </div>

        <div class="community-card">
            <div class="card-header">
                <div class="avatar">👥</div>
                <span class="tag">Arts</span>
            </div>
            <h2>Photography Society</h2>
            <p class="description">Capture campus life and learn photography skills together</p>
            <p class="members">👤 189 members</p>
            <button class="join-btn">Join Community</button>
        </div>

        <div class="community-card">
            <div class="card-header">
                <div class="avatar">👥</div>
                <span class="tag">Activism</span>
            </div>
            <h2>Environmental Action</h2>
            <p class="description">Making our campus more sustainable, one initiative at a time</p>
            <p class="members">👤 156 members</p>
            <button class="join-btn">Join Community</button>
        </div>

        <div class="community-card">
            <div class="card-header">
                <div class="avatar">👥</div>
                <span class="tag">Sports</span>
            </div>
            <h2>Sports Enthusiasts</h2>
            <p class="description">Join us for sports events, tournaments, and fitness activities</p>
            <p class="members">👤 312 members</p>
            <button class="join-btn">Join Community</button>
        </div>

        <div class="community-card">
            <div class="card-header">
                <div class="avatar">👥</div>
                <span class="tag">Arts</span>
            </div>
            <h2>Music & Arts</h2>
            <p class="description">Explore your creative side through music and performing arts</p>
            <p class="members">👤 203 members</p>
            <button class="join-btn">Join Community</button>
        </div>

        <div class="community-card">
            <div class="card-header">
                <div class="avatar">👥</div>
                <span class="tag">Academic</span>
            </div>
            <h2>Debate Society</h2>
            <p class="description">Sharpen your critical thinking and public speaking skills</p>
            <p class="members">👤 134 members</p>
            <button class="join-btn">Join Community</button>
        </div>

    </section>
        </div>
    );
}

export default Communities