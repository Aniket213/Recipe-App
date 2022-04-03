import './App.css';
import React, {useState} from 'react'
import axios from 'axios';
import RecipeTile from './Components/RecipeTile';

function App() {
  const YOUR_APP_ID = "9b99153c";
  const YOUR_APP_KEY = "d7694b372c2316301bd1f30c09de71f1";
  const [query, setquery] = useState("");
  const [recipe, setrecipe] = useState([]);
  const [additionals, setadditionals] = useState("alcohol-free");
  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&calories=591-722&health=${additionals}`;

  const submitHandler = (e)=>{
    e.preventDefault();
    axios.get(url)
    .then((res)=>{
      setrecipe(res.data.hits); // i stuck here for too long because i was not using .hits, we have to pass array to the setrecipe for map function so use .hits only for this this api, open the url to see dataset there you will find hits
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  return (
    <div className='app'>
      <h1>Food Recipe Plaza🍔🍕🍟</h1>
      <form onSubmit={submitHandler}>
        <input className='ingridient' type="text" value={query} onChange={(e)=>setquery(e.target.value)} placeholder='Enter Mango'/>
        <input className='button' type="submit" value="Submit" />
        {/* i was doing this mistake again and again that i was using onclick inside option but correct way is to use onchange inside of select tag */}
        <select className='selecttag' onChange={(e)=>setadditionals(e.target.value)}>
          <option>alcohol-free</option>
          <option>vegan</option>
          <option>egg-free</option>
          <option>vegetarian</option>
          <option>palio</option>
          <option>dairy-free</option>
          <option>wheat-free</option>
          <option>fat-free</option>
          <option>low-sugar</option>
          <option>peanut-free</option>
          <option>tree-nut-free</option>
          <option>soy-free</option>
          <option>fish-free</option>
        </select>
      </form>
      <div className='recipe'>
      <RecipeTile recipe = {recipe}/>
      </div>
    </div>
  );
}

export default App;
