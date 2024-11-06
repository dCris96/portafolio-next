"use client";

import axios from "axios";
import { useState, useEffect } from "react";

export default function TableDisenos() {
  const [disenos, setDisenos] = useState([]); // Estado para almacenar los datos

  // Función para cargar los datos
  async function loadDisenos() {
    try {
      const res = await axios.get("/api/diseno");
      setDisenos(res.data); // Guardar los datos en el estado
    } catch (error) {
      console.error("Error al cargar los datos:", error);
    }
  }

  // Llamar a loadDisenos una vez cuando se monta el componente
  useEffect(() => {
    loadDisenos();
  }, []);

  return (
    <div className="w-full">
      <table className="hidden min-w-full rounded-md text-gray-900 md:table">
        <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
          <tr>
            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
              titulo
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              descripcion
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Imagen
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              behance
            </th>
            <th scope="col" className="px-4 py-5 font-medium">
              Acciones
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 text-gray-900">
          {disenos.map((diseno) => (
            <tr key={diseno.id} className="group">
              <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                {diseno.titulo}
              </td>
              <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                {diseno.descripcion}
              </td>
              <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                {diseno.imageUrl}
              </td>
              <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                {diseno.behanceUrl}
              </td>
              <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                esperando
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
