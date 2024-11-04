import Link from "next/link";

const links = [
  { name: "Home", href: "/admin/dashboard" },
  {
    name: "Diseño Gráfico",
    href: "/admin/disenos",
    // icon: DocumentDuplicateIcon,
  },
  { name: "Desarrollo web", href: "/admin/developer" },
  { name: "Fotografías", href: "/admin/photos" },
  { name: "Tecnologías", href: "/admin/tecnology" },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <Link key={link.name} href={link.href}>
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
