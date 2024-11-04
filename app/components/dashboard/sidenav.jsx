import NavLinks from "./nav-links";
import styles from "@/app/styles/sidenav.module.css";

export default function SideNav() {
  return (
    <div className={styles.aside}>
      <NavLinks />
    </div>
  );
}
