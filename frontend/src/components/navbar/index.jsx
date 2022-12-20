import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="">
        <li className=" uppercase text-red-500">
          <Link to={`/`}>Accueil</Link>
        </li>
        <li>
          <Link to={`/clients`}>Clients</Link>
        </li>
        <li>
          <Link to={`/products`}>Produits</Link>
        </li>        
        <li>
          <Link to={`/logout`}>Disconnect</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
