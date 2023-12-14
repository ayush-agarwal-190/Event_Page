import React from 'react';
import EventCard from './EventCard';

const UpcomingEvents = ({ upcomingEvents }) => {
  return (
    <div>
      <h2>Upcoming Events</h2>
      <div className="event-list">
        {upcomingEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
