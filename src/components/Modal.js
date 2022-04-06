import "./Modal-styles/Modal.css";
import logo from "../img/560812.webp";

function Modal({ setModalState }) {
  return (
    <section className="modal-section">
      <div className="modal-header">
        <div className="btn-container">
          <div className="x-button" onClick={() => setModalState(false)}>X</div>
          <div className="minimize" onClick={() => setModalState(false)}>-</div>
          <div className="null-button"></div>
        </div>
        <h1>About OS</h1>
      </div>
      <p>I am a Web Developer from Boston, Massachusetts. My core skills include HTML, CSS, Javascript, Sass, and Bootstrap, but I have knowledge of OOP concepts and React as well. I always strive to learn about the newest technologies and frameworks, so I would make a great addition to any team.</p>
    </section>
  );
}

export default Modal;
