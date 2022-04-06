import "./Applications-styles/Applications.css";
import folder from "../img/folder-img.webp";

function Applications() {

  return (
    <section className="app-section">
      <div class='folder-container'>
          <img src={folder} />
          <p>Skills</p>
      </div>
      <div class='folder-container'>
          <img src={folder} />
          <p>Planets</p>
      </div>
      <div class='folder-container'>
          <img src={folder}  />
          <p>Games</p>
      </div>
      <div class='folder-container'>
          <img src={folder} />
          <p>Github</p>
      </div>
      <div class='folder-container'>
          <img src={folder} />
          <p>Backend</p>
      </div>
    </section>
  );
}

export default Applications;