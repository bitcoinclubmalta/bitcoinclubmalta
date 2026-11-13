import { Button } from '@/components/ui/button';

const events = [
  {
    name: 'Bitcoin Breakfast',
    description: 'Casual morning networking for Bitcoiners. Coffee, croissants, and conversation.',
    time: 'Every 2nd Saturday at 09:00',
    location: 'Coffee Circus, Sliema',
    capacity: '15-25 people',
    access: 'Open',
  },
  {
    name: 'Monthly Meetup',
    description: 'Our flagship monthly gathering. Updates, talks, networking.',
    time: 'First Thursday at 19:00',
    location: 'Plan B Barbershop',
    capacity: '30-100 people',
    access: 'Open',
  },
  {
    name: 'Bitcoin Trivia Night',
    description: 'Test your Bitcoin knowledge. Prizes in sats!',
    time: 'Dec 20, 2025 at 20:00',
    location: 'TBA',
    capacity: '40-60 people',
    access: 'Open',
  },
  {
    name: 'Sunrise Session',
    description: 'Wellness meets philosophy. Early morning discussions with a view.',
    time: 'Monthly at 06:00',
    location: 'Secret Location',
    capacity: '10-20 people',
    access: 'Members',
  },
  {
    name: 'Wine Tasting',
    description: 'Fine wine, great company. Wholecoiner+ members only.',
    time: 'Quarterly at 19:30',
    location: 'Various Vineyards',
    capacity: '20-30 people',
    access: 'Members',
  },
  {
    name: 'Bitcoin Boat',
    description: 'High-touch networking on the Mediterranean. Treasury members only.',
    time: 'Q1 2026 at 14:00',
    location: 'Valletta Marina',
    capacity: '15-25 people',
    access: 'Treasury',
  },
];

const globalEvents = [
  { name: 'Adopting Bitcoin', location: 'El Salvador', date: 'January 2026', tag: 'Lightning' },
  { name: 'Bitcoin Atlantic', location: 'Madeira', date: 'March 2026', tag: 'European' },
  { name: 'Bitcoin Conference', location: 'Las Vegas', date: 'May 2026', tag: 'Flagship' },
  { name: 'BTC Prague', location: 'Prague', date: 'June 2026', tag: 'EU Major' },
  { name: 'Baltic Honeybadger', location: 'Riga', date: 'September 2026', tag: 'OG European' },
  { name: 'TABConf', location: 'Atlanta', date: 'October 2026', tag: 'Technical' },
];

export function Events() {
  return (
    <section id="events" className="section-border">
      {/* Section Header */}
      <div className="container py-16 lg:py-24 border-b border-border">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Events</span>
          <div className="flex-1 h-px bg-border-subtle" />
        </div>
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl max-w-3xl mb-4">
          Boats. Breakfasts. Secret Locations.
        </h2>
        <p className="text-muted-foreground max-w-xl">
          From casual meetups to exclusive experiences. The social layer that transforms membership into a scene.
        </p>
      </div>

      {/* Events Grid */}
      <div className="container py-16 lg:py-24 border-b border-border">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {events.map((event) => (
            <div key={event.name} className="bg-background p-6 lg:p-8 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs uppercase tracking-wider ${
                  event.access === 'Treasury' ? 'text-accent' : 
                  event.access === 'Members' ? 'text-muted-foreground' : ''
                }`}>
                  {event.access}
                </span>
              </div>
              <h3 className="font-heading text-xl mb-2">{event.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{event.description}</p>
              <div className="space-y-1 text-xs text-muted-foreground">
                <div>{event.time}</div>
                <div>{event.location}</div>
                <div>{event.capacity}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <a href="/events">View Full Events Calendar →</a>
          </Button>
        </div>
      </div>

      {/* Global Events */}
      <div className="container py-16 lg:py-24">
        <div className="mb-8">
          <h3 className="font-heading text-2xl mb-2">Global Bitcoin Calendar</h3>
          <p className="text-sm text-muted-foreground">Connect with BCM members at international conferences</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {globalEvents.map((event) => (
            <div key={event.name} className="bg-background p-6 flex items-center justify-between">
              <div>
                <div className="font-medium mb-1">{event.name}</div>
                <div className="text-xs text-muted-foreground">{event.location} • {event.date}</div>
              </div>
              <span className="text-xs text-muted-foreground border border-border-subtle px-2 py-1">{event.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}