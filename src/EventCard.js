import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <img src={event.image} alt={event.title} />
      <h3>{event.title}</h3>
      <p>{event.date}</p>
    </div>
  );
};

export default EventCard;
