import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/EventList';

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  console.log(featuredEvents);
  return (
    <div>
      <h1>Home Page</h1>
      <p>show Featured events</p>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;
