import React from 'react';
import EventCard from './EventCard';

const PastEvents = ({ pastEvents }) => {
  return (
    <div>
      <h2>Past Events</h2>
      <div className="event-list">
        {pastEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default PastEvents;
