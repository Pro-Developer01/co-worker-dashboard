import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <div className="rootConatiner">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
