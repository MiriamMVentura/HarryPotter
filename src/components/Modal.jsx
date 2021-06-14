import React from "react";

const Modal = ({ isOpen, closeModal }) => {
  return (
    <div className={`modal ${isOpen && "modal-open"}`}>
      <div className="modal-dialog">
        <div className="modal-header">
          <p>Agrega un personaje</p>
          <button onClick={closeModal}>Cerrar</button>
        </div>
        <form className="modal-body">
            <ul className='modal-body-inputs'>
              <li>NOMBRE
            <input type="text" className='input-form'></input>
              </li>
              <li>CUMPLEAÑOS
            <input type="text" className='input-form'></input>
              </li>
              <li>COLOR DE OJOS
                <input type="text" className='input-form'></input>
              </li>
              <li>COLOR DE PELO
            <input type="text"className='input-form'></input>
              </li>
            </ul>
            <section className= 'modal-body-selection'>
        <input type="radio" id="female" name="gender" value="female" />
        <label type="male">Mujer</label>
        <input type="radio" id="male" name="gender" value="male" />
        <label type="male">Hombre</label>
        <input type="radio" id="student" name="gender" value="student" />
        <label type="student">Estudiante</label>
        <input type="radio" id="staff" name="gender" value="staff" />
        <label type="staff">Staff</label>
        </section>
        <p>FOTOGRAFIA (input type file)</p>
        <input type="text"className='input-form'/>
        <div className='modal-footer'>
        <button className="btnSave">GUARDAR</button></div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
