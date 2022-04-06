import "./Bar-styles/Bar.css";
import logo from "../img/560812.webp";

function Bar() {
  
  return (
    <section className="bar-section">
      <h1>Restart</h1>
      <img src={logo} />
      <h1>System</h1>
    </section>
  );
}

export default Bar;