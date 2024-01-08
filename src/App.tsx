import './App.css';
import { NavBar } from './components/NavBar';
import { Commitment } from './components/section/Commitment';
import { CompanyWorked } from './components/section/CompanyWorked';
import { Cta } from './components/section/Cta';
import { Hero } from './components/section/Hero';
import { OurServices } from './components/section/OurServices';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <CompanyWorked />
      <Commitment />
      <OurServices />
      {/* Add Testimoni here */}
      <Cta />
    </div>
  );
}

export default App;
