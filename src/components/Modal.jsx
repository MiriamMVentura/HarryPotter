import React, { useState } from 'react';

const Modal = ({ isOpen, closeModal }) => {
  const [inputData, setInputData] = useState({
    name: '',
    dateOfBirth: '',
    eyeColour: '',
    hairColour: '',
    gender: '',
    hogwartsStudent: '',
    hogwartsStaff: '',
    image: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInputData({ ...inputData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={`modal ${isOpen && 'modal-open'}`}>
      <div className='modal-dialog'>
        <div className='modal-header'>
          <p>Agrega un personaje</p>
          <button onClick={closeModal}>Cerrar</button>
        </div>
        <form className='modal-body' onSubmit={handleSubmit}>
          <ul className='modal-body-inputs'>
            <li>
              NOMBRE
              <input
                type='text'
                id='name'
                className='input-form'
                value={inputData.name}
                onChange={handleChange}
              ></input>
            </li>
            <li>
              CUMPLEAÑOS
              <input
                type='text'
                id='dateOfBirth'
                className='input-form'
                value={inputData.dateOfBirth}
                onChange={handleChange}
              ></input>
            </li>
            <li>
              COLOR DE OJOS
              <input
                type='text'
                id='eyeColour'
                className='input-form'
                value={inputData.eyeColour}
                onChange={handleChange}
              ></input>
            </li>
            <li>
              COLOR DE PELO
              <input
                type='text'
                id='hairColour'
                className='input-form'
                value={inputData.hairColour}
                onChange={handleChange}
              ></input>
            </li>
          </ul>
          <section className='modal-body-selection'>
            <input type='radio' id='gender' value='female' />
            <label type='male'>Mujer</label>
            <input type='radio' id='gender' value='male' />
            <label type='male'>Hombre</label>
            <input type='radio' id='hogwartsStudent' value='student' />
            <label type='student'>Estudiante</label>
            <input type='radio' id='hogwartsStaff' value='staff' />
            <label type='staff'>Staff</label>
          </section>
          <p>FOTOGRAFIA (input type file)</p>
          <input
            type='text'
            className='input-form'
            id='image'
            value={inputData.image}
            onChange={handleChange}
          />
          <div className='modal-footer'>
            <button className='btnSave'>GUARDAR</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
