import { Provider } from 'react-redux';
import { store } from './init/store';
//Navigation
import {BrowserRouter as Router} from 'react-router-dom';
import {history} from './navigation/history';
import { Routes } from './navigation';


function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <Router history = {history}>
          <Routes></Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
