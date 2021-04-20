import { Provider } from 'react-redux';
import { store } from './init/store';

import { People } from './bus/people'

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <People/>
      </div>
    </Provider>
  );
}

export default App;
