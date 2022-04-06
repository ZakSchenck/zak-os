import "./Header-styles/Header.css";
import logo from "../img/560812.webp";
import battery from "../img/batterylogo.ico";
import wifi from "../img/wifiicon.png";
import { useState, useEffect } from "react";

const timeApi = "http://worldtimeapi.org/api/ip";
function Header({ setModalState }) {
  const [timeApiArr, setTimeApiArr] = useState([]);

  const fetchApi = async () => {
    try {
      const timeResponse = await fetch(timeApi);
      const time = await timeResponse.json();
      setTimeApiArr(time);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <header className="header">
      <img src={logo} className="zakos-logo header-item" />
      <h1 className="header-title header-item">Zak Operating System</h1>
      <p className="header-item" onClick={() => setModalState(true)}>About</p>
      <p className="header-item">System</p>
      <p className="header-item">Portfolio</p>
      <div className="rightbar-section">
        <img src={wifi} className="wifi-logo" />
        <img src={battery} />
        <p className="header-item">{timeApiArr.datetime?.slice(11, 16)}</p>
      </div>
    </header>
  );
}

export default Header;
