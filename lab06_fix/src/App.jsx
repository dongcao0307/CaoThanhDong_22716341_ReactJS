import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import OverviewCards from './components/OverviewCards'
import DetailedReport from './components/DetailedReport'
import Projects from './pages/Projects';
import Analytics from './pages/Analytics';
import Messages from './pages/Messages';
import Teams from './pages/Teams';
import Integrations from './pages/Integrations';

function App() {
  return (
    <Router>
      <div className="grid grid-cols-[16rem_1fr] h-screen">
        <Sidebar />
        <main className="bg-gray-50 p-6 overflow-y-auto">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <OverviewCards />
                  <DetailedReport />
                </>
              }
            />
            <Route path="/projects" element={<Projects />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/integrations" element={<Integrations />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
