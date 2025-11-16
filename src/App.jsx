import React from 'react'
import { BrowserRouter, Routes, Route, Link, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/User/Login.jsx'
import Signup from './pages/User/Signup.jsx'
import Header from './components/Header.jsx'
import Communities from './pages/communi/Communities.jsx'
import Map from './pages/Mapping/Map.jsx'
import Issues from './pages/issues/Issues.jsx'
import Feedback from './pages/feedback/Feedback.jsx'
import Gallary from './pages/gallary/Gallary'
import FeedbackFill from './components/FeedbackFill.jsx'
import FeedbackResults from './components/FeedbackResults.jsx'



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
         {
            path: "/feedback",
            element: <><Header/><Feedback/></>
        },
       {  path: "/feedback/fill/:id",
        element: <><Header /><FeedbackFill /></>},
        {
        path: "/feedback/results/:id",
        element: <><Header /><FeedbackResults /></>} 
    ])
    return (
    <>
        <RouterProvider router ={router} />
    </>
);
}
export default App