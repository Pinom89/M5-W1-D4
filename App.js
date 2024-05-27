import  { useState } from 'react';
import './App.css';
import Card from './components/Card.jsx';
import Navbar from './components/Navbar.jsx';
import MyFooter from './components/MyFooter.jsx';
import Welcome from './components/Welcome.jsx';
import fantasy from './json/fantasy.json';
import history from './json/history.json';
import horror from './json/horror.json';
import romance from './json/romance.json';
import scifi from './json/scifi.json';
import { MDBBtn } from 'mdb-react-ui-kit';



function App() {

  let [generes, setGeneres] = useState('fantasy');
  return (
    <div className="App">
      <Navbar/>
      <Welcome/>
      <div className='d-flex justify-content-center align-items-center '>
      <MDBBtn className='mx-2' color='dark' onClick={() => setGeneres('fantasy')}>
        Fantasy
      </MDBBtn>
      <MDBBtn className='mx-2' color='dark' onClick={() => setGeneres('horror')}>
        Horror
      </MDBBtn>
      <MDBBtn className='mx-2' color='dark' onClick={() => setGeneres('scifi')}>
        Scifi
      </MDBBtn>
      <MDBBtn className='mx-2' color='dark' onClick={() => setGeneres('history')}>
        History
      </MDBBtn>
      <MDBBtn className='mx-2' color='dark' onClick={() => setGeneres('romance')}>
        Romance
      </MDBBtn>
      </div>

      {generes === 'fantasy' && <Card films={fantasy} />}
      {generes === 'horror' && <Card films={horror} />}
      {generes === 'scifi' && <Card films={scifi} />}
      {generes === 'history' && <Card films={history} />}
      {generes === 'romance' && <Card films={romance} />}
    

    <MyFooter/>
    </div>
  );
}

export default App;
