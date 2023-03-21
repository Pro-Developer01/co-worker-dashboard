import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <div className="rootConatiner">

      {/* sidebar for menu Navigation */}
      <Sidebar />

      {/* dashboad: main feed page with all the components */}
      <Dashboard />
    </div>
  );
}

export default App;
