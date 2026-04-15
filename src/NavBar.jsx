import Contrast from "./assets/contrast.png";
import { useState } from "react";
import Home from './Home'

function NavBar() {

    const [dark, setDark] = useState(false);

    const toggleTheme = () => {
        setDark(!dark);
        document.documentElement.classList.toggle("dark");
    }
  return (
    <>
      <div>
        <p className="flex justify-end mt-10 self-end mr-10 cursor-pointer max-sm:mr-2" onClick={toggleTheme}>
        <p><img className="w-6 h-auto" src={Contrast} alt="Contrast" /></p>
        </p>
      </div>
    </>
  );
}

export default NavBar;
