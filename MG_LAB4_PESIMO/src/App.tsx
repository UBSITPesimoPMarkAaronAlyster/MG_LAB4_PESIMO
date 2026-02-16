import './App.css'

type Event = {
  eventName: string;
  venue: string;
  date: string;
  organizer: string;
  capacity: number;
  registeredStudents: string[];
};

function App() {
  const UBEVENTS: Event[] = [
    {
      eventName: "E-sports Tournaments",
      venue: "Gymnasium",
      date: "Feb 28, 2026",
      organizer: "SIT DEPARTMENT",
      capacity: 200,
      registeredStudents: ["Alyster Pesimo", "Mary Grace Solis", "John Kaisen"],
    },
    {
      eventName: "Leadership Seminar",
      venue: "Room F215",
      date: "March 5, 2026",
      organizer: "SEA DEPARTMENT",
      capacity: 25,
      registeredStudents: ["Joe Jujutsu", "John doe", "Alexander Abdul"],
    },
    {
      eventName: "Sports Fest",
      venue: "Gymnasium",
      date: "March 15, 2026",
      organizer: "CRIMINOLOGY",
      capacity: 200,
      registeredStudents: ["Victor Wembanyama", "Kyrie Irving", "James Harden"],
    },
  ];

  return (
    <>
      <h1>University Event Registration Dashboard</h1>

      {UBEVENTS.map((event, index) => (
        <section key={index}>
          <h2>{event.eventName}</h2>
          <p>Venue: {event.venue}</p>
          <p>Date: {event.date}</p>
          <p>Organizer: {event.organizer}</p>
          <p>
            Registered: {event.registeredStudents.length} / {event.capacity}
          </p>

          <ul>
            {event.registeredStudents.map((student, i) => (
              <li key={i}>{student}</li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}

export default App;
