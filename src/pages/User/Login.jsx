import React, { useState } from 'react';
import axios from 'axios';


export default function Login() {
const [email, setEmail] = useState('');
const [message, setMessage] = useState(null);


async function submit(e) {
e.preventDefault();
try {
const res = await axios.post('/api/auth/login', { email });
setMessage(res.data.message || 'ok');
} catch (err) {
setMessage('error');
}
}


return (
<div style={{ padding: 20 }}>
<h2>Login</h2>
<form onSubmit={submit}>
<input value={email} onChange={e => setEmail(e.target.value)} placeholder="email" />
<button type="submit">Login</button>
</form>
{message && <p>{message}</p>}
</div>
);
}