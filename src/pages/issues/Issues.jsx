import React from 'react'
import './issue.css'

const Issues = () => {
  return (
        <div class="back">

<div class="container">
    <h2 class="title">Submit a Report</h2>
    <p class="subtitle">Fill out the form below to report a campus issue</p>

    <form id="issueForm" class="issue-form">

        <label>Issue Title *</label>
        <input id="titleInput" type="text" placeholder="Brief description of the issue" required/>

        <label>Category *</label>
        <select id="categoryInput" required>
            <option value="">Select a category</option>
            <option value="safety">Safety</option>
            <option value="maintenance">Maintenance</option>
            <option value="cleanliness">Cleanliness</option>
            <option value="technical">Technical</option>
        </select>

        <label>Location</label>
        <input id="locationInput" type="text" placeholder="Where is this issue located?"/>

        <label>Description *</label>
        <textarea id="descInput" placeholder="Provide detailed information about the issue" required></textarea>

        <button type="submit" class="submit-btn">Submit Issue</button>
    </form>
</div>


<div class="recent-container">
    <h2 class="recent-title">Recent Issues</h2>
    <div id="recentIssues"></div>
</div>
</div>

  );
}

export default Issues