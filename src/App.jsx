import { useState } from 'react';
import './scss/main.scss';

import Header from './components/layout/header';
import Body from './components/layout/body';

function App() {

  return (
    <>
      <div className="main_conatiner">
        <Header/>
        <Body/>
      </div>
    </>
  )
}

export default App;
