// App.js
import React, { useEffect, useState } from 'react';
import PastEvents from './PastEvents';
import UpcomingEvents from './UpcomingEvents';
import Navbar from './Navbar'; // Import Navbar component
import './App.css';

const App = () => {
  // State to store events data
  const [events, setEvents] = useState([]);

  // Fetch events data from JSON file on component mount
  useEffect(() => {
    fetch('/events.json')
      .then((response) => response.json())
      .then((data) => setEvents(data.events))
      .catch((error) => console.error('Error fetching event data:', error));
  }, []);

  // Get current date
  const currentDate = new Date();

  // Filter events for past and upcoming
  const pastEvents = events.filter((event) => new Date(event.date) < currentDate);
  const upcomingEvents = events.filter((event) => new Date(event.date) >= currentDate);

  return (
    <div className="app-container">
      <Navbar /> {/* Use Navbar component */}
      <h1>Events Track List</h1>
      <div className="events-section">
        <h2>Past Events</h2>
        <div className="event-list">
          {pastEvents.map((event) => (
            <div key={event.id} className="event-card past-event">
              <img src={event.image} alt={event.title} />
              <h3>{event.title}</h3>
              <p>{event.date}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="events-section">
        <h2>Upcoming Events</h2>
        <div className="event-list">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="event-card">
              <img src={event.image} alt={event.title} />
              <h3>{event.title}</h3>
              <p>{event.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
