import "./App.css";
import Header from "./components/Header.js";
import Bar from "./components/Bar.js";
import Applications from "./components/Applications.js";
import Modal from "./components/Modal.js";
import { useState } from 'react';

function App() {
  const [modalState, setModalState] = useState(false);
  let modal = <Modal setModalState={setModalState} />

  return (
    <main className="main-container">
      <Header setModalState={setModalState} />
      <Applications />
      <Bar />
      <div>{modalState && modal}</div>
    </main>
  );
}

export default App;
