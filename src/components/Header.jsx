import React from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
return (
<header style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>
<Link to="/">CampusEngage</Link>
<nav style={{ float: 'right' }}>
<Link to="/login" style={{ marginRight: 8 }}>Login</Link>
<Link to="/signup">Signup</Link>
</nav>
</header>
);
}