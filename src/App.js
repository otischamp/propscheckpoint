import './App.css';
import PlayerList from './PlayerList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* //////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\  CARDS SECTION /////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/}
<section className='container p-4'>
                <div>
                <PlayerList />
                </div>
        </section>
        
      </header>
    </div>
  );
}

export default App;
