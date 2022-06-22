import { TimetablePage } from './pages/TimetablePage';
import './index.css';
import { Routes, Route } from 'react-router-dom'
import { TimetableExample } from './pages/TimetableExample';
import { ScheduleExample } from './pages/ScheduleExample';

function App() {

// add router: + 
// page with table of subjects: 60%
// mb dialog okno when wanna edit subject: -

  return (
    <div className="App">
      {/* <header>
        <Link to="/" id='2'>Timetable</Link>
      </header> */}

      <Routes>
        <Route path="/" element={<TimetablePage />}/>
        <Route path="/timetable-example" element={<TimetableExample />} />
        <Route path="/schedule-example" element={<ScheduleExample />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </div>
  )
}

export default App;
