import SideNav from "../components/dashboard/sidenav";
import styleLayout from "@/app/styles/layout-dashoarb.module.css";
import styleMain from "@/app/styles/admin.module.css";

export default function Layout({ children }) {
  return (
    <div className={styleLayout.contenedor}>
      <SideNav />
      <div className={styleMain.cuerpo}>{children}</div>
    </div>
  );
}
