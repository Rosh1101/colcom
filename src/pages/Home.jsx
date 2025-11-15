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
<h1>Welcome to CampusEngage</h1>
<pre>{JSON.stringify(data, null, 2)}</pre>
</main>
);
}