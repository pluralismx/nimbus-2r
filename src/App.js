import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavigationbarComponent from './components/Navigationbar/NavigationbarComponent';
import NotesComponent from './components/Notes/NotesComponent';
import LeadTableComponent from './components/Lead-table/LeadTableComponent';
import EmailCampaignComponent from './components/Email-campaign/EmailCampaignComponent';

function App() {

  return (
    <div className="layout">
      <NavigationbarComponent />
      <Routes>
        <Route path="/notes" element={<NotesComponent />} />
        <Route path="/lead-table" element={<LeadTableComponent />} />
        <Route path="/email-campaign" element={<EmailCampaignComponent />} />
      </Routes>
    </div>
  );
}

export default App;
