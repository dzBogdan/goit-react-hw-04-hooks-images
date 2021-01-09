import { useState } from 'react';
import './image-finder.moduls.css';

export default function Searchbar({ onChenge }){
  const [find, setFind] = useState('');
  

 const handleInputFilterChenge = event =>{
    setFind(event.currentTarget.value);
  }

  const heandleOnClick=event=>{
    event.preventDefault();
    onChenge(find);
    
  }


  
 return(
    <header className="Searchbar">
      <form className="SearchForm">
       <button type="submit" className="SearchForm-button" onClick={heandleOnClick}>
      <span className="SearchForm-button-label">Search</span>
    </button>

    <input
      className="SearchForm-input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
      onChange= {handleInputFilterChenge}
    />
  </form>
</header>
    )
 }

