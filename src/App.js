import Main from './Main';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Main/>
      </Router>
    </GlobalProvider>  
  );
}

export default App;
