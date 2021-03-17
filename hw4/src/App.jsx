import './App.css';
import store from './store';
import {Provider} from 'react-redux';
import Users from './containers/users.jsx'
import Registration from './containers/registration.jsx' 
import InfoData from './containers/infoData.jsx'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <main>
          <Users/>
        </main>
        <section >
          <Registration/>
          <InfoData/>
        </section>
      </div>
    </Provider>
  );
}

export default App;
