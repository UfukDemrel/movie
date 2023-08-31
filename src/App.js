import './App.css';
import './Header.css';
import './LSlider.css';
import Header from './Header';
import LSlider from './LSlider';
import React, { useEffect, useState } from 'react';
 
function App() {

  const [isLoading, setIsLoading] = useState(true);
  // Simulate a loading delay with useEffect
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulating a 2-second loading time
  }, []);

  return (
    <div>
        {isLoading ? (
       <img src='https://media4.giphy.com/media/jTY1IT57sxhPSdqa5J/200w.gif?cid=82a1493b9813uzz936j54ojnf3ju37tddrfts9t7nu7uvym9&ep=v1_gifs_related&rid=200w.gif&ct=s' width={'25%'} alt='alt'/>
        ) : (
        <div className='app'> 
        <Header/>
          <main style={{ top: '72px' }}>
          <LSlider/>
          </main>
        </div> 
        )}
    </div>
  );
}

export default App;
