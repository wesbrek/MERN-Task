import React from "react";

const Header = () => {
  return (
    <header className="app-header">
      <p className="nombre-usuario">
        Hola <span>Sergio Alfaro</span>{" "}
      </p>

      <nav className="nav-principal">
        <a href="#!">Log out</a>
      </nav>
    </header>
  );
};

export default Header;
