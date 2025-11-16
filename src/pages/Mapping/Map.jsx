import React from 'react'
import './map.css'

const Map = () => {
  return (
    <div class="back">
        <h1 class="page-title">Campus Map</h1>
    <p class="subtitle">Explore all the key locations around campus</p>

    <div class="map-container">
        <div class="map-content">
            <div class="map-icon">📍</div>
            <h2>Interactive Map</h2>
            <p>Full interactive campus map coming soon!</p>
            <p>For now, explore the locations below</p>
        </div>
    </div>

    <h3 class="locations-title">Campus Locations</h3>

    <div class="cards-grid">

        <div class="card">
            <div class="icon blue">📘</div>
            <h4>Main Library</h4>
            <span class="tag">Academic</span>
            <p>24/7 study space with extensive resources</p>
            <a href="#" class="view-map">📍 View on map</a>
        </div>

        <div class="card">
            <div class="icon green">🏠</div>
            <h4>Student Center</h4>
            <span class="tag">Common</span>
            <p>Hub for student activities and services</p>
            <a href="#" class="view-map">📍 View on map</a>
        </div>

        <div class="card">
            <div class="icon yellow">🍽️</div>
            <h4>Cafeteria</h4>
            <span class="tag">Dining</span>
            <p>Multiple dining options available</p>
            <a href="#" class="view-map">📍 View on map</a>
        </div>

        <div class="card">
            <div class="icon purple">🔬</div>
            <h4>Science Building</h4>
            <span class="tag">Academic</span>
            <p>State-of-the-art laboratories and classrooms</p>
            <a href="#" class="view-map">📍 View on map</a>
        </div>

        <div class="card">
            <div class="icon red">🏋️</div>
            <h4>Sports Complex</h4>
            <span class="tag">Recreation</span>
            <p>Gym, pool, and indoor sports facilities</p>
            <a href="#" class="view-map">📍 View on map</a>
        </div>

        <div class="card">
            <div class="icon pink">🎭</div>
            <h4>Arts Building</h4>
            <span class="tag">Academic</span>
            <p>Theater, studios, and performance spaces</p>
            <a href="#" class="view-map">📍 View on map</a>
        </div>

    </div>
    </div>
  )
}

export default Map