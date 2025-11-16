import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function Home() {
const [data, setData] = useState(null);


useEffect(() => {
axios.get('/api') // using proxy in development
.then(r => setData(r.data))
.catch(() => setData({ message: 'Backend not available' }));
}, []);


return (
<main style={{ padding: 20 }}>



<section class="hero">
    <h1 class="hero-title">Welcome to <br/><span>ColCom</span></h1>
    <p class="hero-subtitle">
        Your all-in-one platform for campus life. Report issues, explore communities, <br/>
        and stay connected with everything happening on campus.
    </p>

    <div class="hero-buttons">
        <button class="primary-btn">Get Started</button>
        <button class="secondary-btn">Explore Communities</button>
    </div>
</section>


<section class="stats">
    <div class="stat-card">
        <div class="icon">✨</div>
        <h2>2,500+</h2>
        <p>Active Students</p>
    </div>

    <div class="stat-card">
        <div class="icon">🛡️</div>
        <h2>1,200+</h2>
        <p>Issues Resolved</p>
    </div>

    <div class="stat-card">
        <div class="icon">⚡</div>
        <h2>50+</h2>
        <p>Communities</p>
    </div>
</section>
{/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
</main>
);
}