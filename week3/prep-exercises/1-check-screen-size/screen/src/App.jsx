import React from 'react';
import useWindowSize from './useWindowSize';

function App() {
  const size = useWindowSize();

  return (
    <div className="App">
      <h1>Responsive Layout</h1>
      <p>Current Window Size: {size.width} x {size.height}</p>
      
      {/* Example view change based on screen width */}
      {size.width > 768 ? (
        <p>This is a desktop view!</p>
      ) : (
        <p>This is a mobile view!</p>
      )}
    </div>
  );
}

export default App;
