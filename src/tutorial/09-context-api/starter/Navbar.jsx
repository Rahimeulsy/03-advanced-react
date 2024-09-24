
import { useState } from "react";
import NavLinks from "./NavLinks";
const Navbar = () => {
    const [user, setUser] = useState({name:'Bob'})
    const logout =()=>{
        setUser(null);
    };
  return (<nav className="navbar">
    <h5>CONTEXT API</h5>
    <NavLinks />
  </nav>

  );
  
};

export default Navbar;