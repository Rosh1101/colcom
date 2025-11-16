import React from 'react'
import { BrowserRouter, Routes, Route, Link, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Header from './components/Header.jsx'


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
        }
    ])
    return (
    <>
        <RouterProvider router ={router} />
    </>
);
}
export default App