import { FaRegMoon, FaSun } from "react-icons/fa";
import "./Header.css";

export default function Header(props) {
  const{theme , setTheme} = props;
  function Toggletheme() {
    if (theme==="light"){
      setTheme("dark")
    }else{
      setTheme("light")
    }
  }
  return (
    <header>
      <div className="Logo">
        <span>Task ListS</span>
      </div>
      <div className="theme-contain">
        <span>{theme === "light" ? "Light mode" : "Dark mode"}</span>
        <span className="mode" onClick={Toggletheme}>{theme === "light" ? <FaSun /> : <FaRegMoon />}</span>
      </div>
    </header>
  );
}

