import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import AttendeesList from './AttendeesList';
import LocationForm from './LocationForm';
import ConferenceForm from './ConferenceForm';
import PresentationForm from './PresentationForm';
import AttendConferenceForm from './AttendConferenceForm';
import MainPage from './MainPage';

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="locations/new" element={<LocationForm />} />
          <Route path="attendees/new" element={<AttendConferenceForm />} />
          <Route path="conferences/new" element={<ConferenceForm />} />
          <Route path="/attendees" element={<AttendeesList attendees = {props.attendees}/>} />
          <Route path="presentations/new" element={<PresentationForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
