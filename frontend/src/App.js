import './App.css';
import Banner from './components/Banner';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Dashboard/>
    </div>
  );
}

export default App;
