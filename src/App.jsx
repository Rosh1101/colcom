import React from 'react'
import { BrowserRouter, Routes, Route, Link, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/User/Login.jsx'
import Signup from './pages/User/Signup.jsx'
import Header from './components/Header.jsx'
import Communities from './pages/communi/Communities.jsx'
import Map from './pages/Mapping/Map.jsx'
import Gallary from './pages/gallery/Gallary.jsx'
import Issues from './pages/issues/Issues.jsx'


function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <><Header/><Home /></>
        },
        {
            path: "/login",
            element: <><Header/><Login /></>
        },
        {
            path: "/signup",
            element: <><Header/><Signup /></>
        },
        {
            path: "/communities",
            element: <><Header/><Communities/></>
        },
        {
            path: "/map",
            element: <><Header/><Map/></>
        },
        {
            path: "/issues",
            element: <><Header/><Issues/></>
        },
        {
            path: "/gallary",
            element: <><Header/><Gallary/></>
        },
    ])
    return (
    <>
        <RouterProvider router ={router} />
    </>
);
}
export default App