import React, {  useEffect, useState } from 'react';
import Card from './Card';

const Home = () => {
  const [characters, setCharacters] = useState();

  let getData = async () => {
    let url = 'http://localhost:8000/characters/';
    let getFetchData = await fetch(url).then((result) => result.json());
    setCharacters(getFetchData);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {characters &&
        characters.map(character =>
          <Card character={character}
          key={character.name} />
        )}
    </div>
  );
};

export default Home;
