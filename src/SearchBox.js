import {useState} from 'react';
import './SearchBox.css';
import Results from './Results';
import Landing from './Landing';

function SearchBox() {

  const[username, setUsername] = useState(""); 

  function search(e) {
    setUsername(e.target.value);
  }

  return (
    <>
      <div className="search__container">
          <input 
              type="text"
              className="search__input" 
              placeholder="Search for GutHub user"
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  search(event);
                }
              }}
          />
      </div>
      { username !== '' ?  <Results username={username} /> : <Landing /> }
    </>
  );
}

export default SearchBox;
