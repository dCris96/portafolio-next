import SideNav from "../components/dashboard/sidenav";
import styles from "@/app/styles/layout-dashoarb.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.contenedor}>
      <SideNav />
      <div>{children}</div>
    </div>
  );
}
