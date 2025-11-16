import React, { useState } from 'react';
import axios from 'axios';


export default function Signup() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [msg, setMsg] = useState(null);


async function submit(e) {
e.preventDefault();
try {
const res = await axios.post('/api/auth/signup', { name, email });
setMsg(res.data.message);
} catch (err) {
setMsg('error');
}
}


return (
<div style={{ padding: 20 }}>
<h2>Signup</h2>
<form onSubmit={submit}>
<input value={name} onChange={e => setName(e.target.value)} placeholder="name" />
<input value={email} onChange={e => setEmail(e.target.value)} placeholder="email" />
<button type="submit">Signup</button>
</form>
{msg && <p>{msg}</p>}
</div>
);
}