import { Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting/Greeting';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>
  );
}

export default App;
