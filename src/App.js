import './App.css';
import './Header.css';
import './LSlider.css';
import Header from './Header';
import LSlider from './LSlider';


function App() {
  return (
    <div className="App">
      <Header/>
      <main style={{top: '72px'}}>: 
        <LSlider/>
      </main>
    </div>
  );
}

export default App;
