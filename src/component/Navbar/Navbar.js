import styles from "./Navbar.module.css";
import MenuIcon from "@material-ui/icons/Menu";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_menu}>
        <MenuIcon /> <span>Menu</span>
      </div>
      <div className={styles.navbar_logo}>Snapshots</div>
    </div>
  );
};

export default Navbar;
