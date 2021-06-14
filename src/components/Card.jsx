import React, { Fragment } from 'react';
import favBtn from '../assets/rectangle1.png';

const Card = ({ character}) => {
  const {
    name,
    dateOfBirth,
    gender,
    eyeColour,
    hairColour,
    alive,
    hogwartsStudent,
    hogwartsStaff,
    image,
    house
  } = character;

  const isDeadOrAlive = () => {
    const live = alive;
    if (live == true) {
      return 'VIVO';
    } else {
      return 'FINADO';
    }
  };

  const isDeadOrAliveColor = () => {
    const live = alive;
    if (live == true) {
      return 'card-live';
    } else {
      return 'card-dead';
    }
  };

  const isStudentOrStaff = () => {
    const student = hogwartsStudent;
    const staff = hogwartsStaff;
    if (student == true) {
      return 'ESTUDIANTE';
    } else if (staff == true) {
      return 'STAFF';
    }
  };

  const houseColor = () => {
    if (house === 'Slytherin') {
      return 'card-img-slytherin';
    }else if(house === 'Gryffindor'){
      return 'card-img-gryffindor';
    }else if(house === 'Ravenclaw'){
      return 'card-img-ravenclaw';
    }else if(house === 'Hufflepuff'){
      return 'card-img-hufflepuff';
    }else{
      return 'card-img-unknown'
    }
  };



  return (
    <div className='flex'>
      {character && (
        <Fragment>
          <article className='card' id={isDeadOrAliveColor()}>
            <div className='card-img' id={houseColor()}>
              <img src={image} className='card-img-photo' />
            </div>
            <div className='card-body'>
              <div className='card-header'>
                <h3 className='card-header-note'>
                  {isDeadOrAlive()} / {isStudentOrStaff()}
                </h3>
                <img src={favBtn} className='card-header-btn' />
              </div>
              <h1 className='card-title'>{name}</h1>
              <ul className='card-text'>
                <li>
                  Cumpleaños: <span>{dateOfBirth}</span>
                </li>
                <li>
                  Género: <span>{gender}</span>
                </li>
                <li>
                  Color de ojos: <span>{eyeColour}</span>
                </li>
                <li>
                  Color de pelo: <span >{hairColour}</span>
                </li>
              </ul>
            </div>
          </article>
        </Fragment>
      )}
    </div>
  );
};

export default Card;
