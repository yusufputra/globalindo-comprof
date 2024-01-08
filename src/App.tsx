import './App.css';
import { NavBar } from './components/NavBar';
import { Commitment } from './components/section/Commitment';
import { CompanyWorked } from './components/section/CompanyWorked';
import { Hero } from './components/section/Hero';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <CompanyWorked />
      <Commitment />
    </div>
  );
}

export default App;
