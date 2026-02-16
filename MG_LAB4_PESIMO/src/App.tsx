import './App.css'

function App() {
  type EventProps = { 
    eventName: string; 
    venue: string; 
    date: string; 
    organizer: string; 
    capacity: number; 
    registeredStudents: string[]; 
   };
      
  type StudentListProps = { 
    students: string[]; 
   };
   
   
  return (
    <>
    <h1>University Event Registration Dashboard</h1>
    </>
  )
}

export default App
