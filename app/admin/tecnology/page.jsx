import TableTecnologia from "@/app/components/tecnologia/table";
import FormTecnologia from "@/app/components/tecnologia/form";

export default function TecnologiaAdmin() {
  return (
    <div>
      <h2>Pagina de tecnologias</h2>
      <FormTecnologia />
      <TableTecnologia />
    </div>
  );
}
