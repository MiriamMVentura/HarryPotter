import React, {Fragment} from 'react'

const Card = ({character}) => {

  const {name, dateOfBirth, gender, eyeColour, hairColour, alive, hogwartsStudent} = character;


  const isDeadOrAlive = () =>{
    const live= alive;
    if (live== true){
      return 'VIVO';
    }else{
      return 'FINADO'
    }
  }

  const isStudentOrStaff = () =>{
    const student= hogwartsStudent;
    if (student== true){
      return 'ESTUDIANTE';
    }else{
      return 'STAFF'
    }
  }

  return (
    <div>
      {character&&
      <Fragment>
        <p>{isDeadOrAlive()}/{isStudentOrStaff()}</p>
      <p>{name}</p>
      <p>Cumpleaños: {dateOfBirth}</p>
      <p>Género: {gender}</p>
      <p>Color de ojos: {eyeColour}</p>
      <p>Color de pelo: {hairColour}</p>
      </Fragment>
      }

    </div>
  )
}

export default Card
