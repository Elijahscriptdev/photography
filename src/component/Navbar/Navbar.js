import styles from "./Navbar.module.css";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbar_container}>
          <a to='/' className={styles.navbar_logo} onClick={closeMobileMenu}>
            snapshots
          </a>
          <div className={styles.menu_icon} onClick={handleClick}>
            {!click && <MenuIcon />}
          </div>
        </div>

        {click ? (
          <div className={styles.active}>
            <div className={styles.menu_icons} onClick={handleClick}>
              <span className={styles.navigation}> NAVIGATION </span>
              {click && <CloseIcon />}
            </div>
            <a href='#home' onClick={closeMobileMenu}>
              Home
            </a>
            <a href='#about' onClick={closeMobileMenu}>
              About
            </a>
            <a href='#portfolio' onClick={closeMobileMenu}>
              Porfolio
            </a>
            <a href='#contact' onClick={closeMobileMenu}>
              Contact Us
            </a>
            <a href='#clients' onClick={closeMobileMenu}>
              Clients
            </a>
            <a href='#links' onClick={closeMobileMenu}>
              Quick Links
            </a>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
              id incidunt quisquam voluptates ipsum amet vel minus mollitia
              molestiae expedita, hic voluptatibus.
            </p>
          </div>
        ) : null}
      </nav>
    </>
  );
};

export default Navbar;
