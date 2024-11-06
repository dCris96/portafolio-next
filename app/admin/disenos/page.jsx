import TableDisenos from "@/app/components/disenos/table";
import FormDisenos from "@/app/components/disenos/form";

export default async function DisenosAdmin() {
  return (
    <div>
      <h2>Pagina de Diseños</h2>
      <FormDisenos />
      <div>
        <TableDisenos />
      </div>
    </div>
  );
}
