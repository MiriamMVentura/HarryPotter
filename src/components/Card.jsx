import React, { Fragment } from 'react';
import favBtn from '../assets/rectangle1.png';

const Card = ({ character }) => {

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
  } = character;

  const isDeadOrAlive = () => {
    const live = alive;
    if (live == true) {
      return 'VIVO';
    } else {
      return 'FINADO';
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

  return (
    <div className='flex'>
      {character && (
        <Fragment>
          <article className='card'>
            <div className='card-img'>
              <img src={image} className='card-img-photo' />
            </div>
            <div className='card-body'>
              <div className='card-header'>
                <p className='card-header-note'>
                  {isDeadOrAlive()} / {isStudentOrStaff()}
                </p>
                <img src={favBtn} className='card-header-btn' />
              </div>
              <p className='card-title'>{name}</p>
              <p className='card-subtitle'>
                Cumpleaños:
                <span className='card-subtitle-text'>{dateOfBirth}</span>
              </p>
              <p className='card-subtitle'>
                Género: <span className='card-subtitle-text'>{gender}</span>
              </p>
              <p className='card-subtitle'>
                Color de ojos:
                <span className='card-subtitle-text'>{eyeColour}</span>
              </p>
              <p className='card-subtitle'>
                Color de pelo:
                <span className='card-subtitle-text'>{hairColour}</span>
              </p>
            </div>
          </article>
        </Fragment>
      )}
    </div>
  );
};

export default Card;
