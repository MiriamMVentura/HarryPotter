import React, { useEffect, useState, Fragment} from 'react';
import Card from './Card';
import data from '../api/hp-characters.json'
import axios from 'axios';

const Home = () => {
  const [characters, setCharacters] = useState();

  const getData = async () => {
    axios.get('http://localhost:8000/characters').then(({ data: data}) => setCharacters(data));
  };

  useEffect(() => {
    getData();
  }, []);

  const handleBtns= (e)=>{
    let word = e.target.value;
    if(word === 'students' ){
      const filtered = data.filter(character=>character.hogwartsStudent === true);
      return setCharacters(filtered);
    } else if(word === 'staff'){
        const filtered = data.filter(character=>character.hogwartsStaff === true);
        return setCharacters(filtered)
      }else if(word === 'alive'){
        const filtered = data.filter(character=>character.alive === true);
        return setCharacters(filtered)
    }
  }

  return (
    <Fragment>
      <h2>Selecciona tu filtro</h2>
    <div className='navFilter'>
      <button className='btnFilter'
      value='students' onClick={handleBtns}>ESTUDIANTES</button>
      <button className='btnFilter'
      value='staff' onClick={handleBtns}>STAFF</button>
      <button className='btnFilter'
      value='alive' onClick={handleBtns}>VIVO</button>
    </div>
    <div className='get-cards'>
      {characters &&
        characters.map((character) => (
          <Card character={character} key={character.name}
          setCharacters={setCharacters}/>
        ))}
    </div>
    </Fragment>
  );
};

export default Home;
