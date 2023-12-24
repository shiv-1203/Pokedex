import './App.css';
import MainContent from './components/MainContent/MainContent';
import { useState, useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

function App() {
  const [documentReady, setDocumentReady] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setDocumentReady(true);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className="App">
    <div className='dim-overlay'></div>
      {documentReady ? (
        <div>
          <MainContent />
        </div>
      ) : (
        <div style={{ marginTop: '200px', marginLeft:'45vw' }}>
          <ClipLoader
            color='white'
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
    </div>
  );
}

export default App;
