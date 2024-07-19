import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Components/app/Header';
import Main from './Components/app/Main';
 
function App() {
  const [setHello] = useState('')
  
  useEffect(() => {
    axios.get('http://localhost:8086/')
      .then(response => setHello(response.data))
      .catch(error => console.log(error))
  }, []);
 
  return (
    
    <div>
      <Header />
      <Main />
    </div>
  );
}
 
export default App;
