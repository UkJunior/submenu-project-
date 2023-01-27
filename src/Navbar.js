import react from "react";
import logo from './image/logo.png'
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { closeSubmenu, openSubmenu, openSidebar } = useGlobalContext()

    const displaySubmenu = (e) =>{
     const page = e.target.textContent;
     const tempBtn = e.target.getBoundingClientRect();
     const center = (tempBtn.left + tempBtn.right) / 2;
     const bottom = tempBtn.bottom - 3;
     openSubmenu(page, { center, bottom });
    }

    const handleSubmenu = (e) => {
        if(!e.target.classList.contains('link-btn')) {
            closeSubmenu();
        }
    };

  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
      <div className="nav-header">
      <img src={logo} alt="" style={{width: 50}} />
        <button className="btn toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
      </div>
      <ul className="nav-links">
        <li>
          <button className="link-btn" onMouseOver={displaySubmenu}>
            menu
          </button>
        </li>
        <li>
          <button className="link-btn" onMouseOver={displaySubmenu}>contacts</button>
        </li>
        <li>
        <button className="link-btn" onMouseOver={displaySubmenu}>gallery</button>
        </li>
      </ul>
      <button className="btn signin-btn">sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
