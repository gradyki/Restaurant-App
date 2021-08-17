import './App.css';
import { useState, useEffect } from 'react';
import {restaurantsUrl} from './services/index'
import axios from 'axios';

function App() {
  const [restaurants, setRestaurants] = useState(null)

  useEffect(() => {
    const getRestaurants = async ()=>{
      const resp = await axios.get(`${restaurantsUrl}`)
      setRestaurants(resp)
      console.log('inside', restaurants)
    }
    
    getRestaurants()
    console.log('outside', restaurants)
  }, [])
  
  console.log('outer', restaurants)

  return (
    <div className="App">
     test
    </div>
  );
}

export default App;
