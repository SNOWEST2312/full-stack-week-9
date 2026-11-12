import { createRoot } from 'react-dom/client';

function App() {
  return <h1>React funciona con Parcel</h1>;
}

createRoot(document.getElementById('root')).render(<App />);
