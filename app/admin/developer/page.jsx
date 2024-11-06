import TableDesarrollo from "@/app/components/developer/table";
import FormDesarrollo from "@/app/components/developer/form";

export default function DesarrolloAdmin() {
  return (
    <div>
      <h2>Pagina de desarrollo</h2>
      <FormDesarrollo />
      <TableDesarrollo />
    </div>
  );
}
