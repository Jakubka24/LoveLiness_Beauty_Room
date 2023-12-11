import './App.css';

import { useEffect } from 'react';


import Fotter from './components/fotter';
import Location from './components/location';
import Services from './components/services';
import Stylists from './components/stylists';
import Main from './components/main/main';
import Podologia from './components/podiatry';
import Training from './components/training';
import Opinions from './components/opinions';


function App() {



  return (
    <div className='flex flex-col max' >
  <Main/>
  <Services/>
  <Podologia/>
  <Stylists/>
  <Training/>
  <Location/>
  <Opinions/>
  <Fotter/> 
    </div>
  );
}

export default App;
