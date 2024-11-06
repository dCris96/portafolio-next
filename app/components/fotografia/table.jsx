"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function TablaFotos() {
  const [fotos, setFotos] = useState([]); // Estado para almacenar los datos

  // Función para cargar los datos
  async function loadFotos() {
    try {
      const res = await axios.get("/api/fotografia");
      setFotos(res.data); // Guardar los datos en el estado
    } catch (error) {
      console.error("Error al cargar los datos:", error);
    }
  }

  // Llamar a loadDisenos una vez cuando se monta el componente
  useEffect(() => {
    loadFotos();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow-md sm:rounded-lg">
            <table className="min-w-full">
              <thead className="bg-blue-500">
                <tr>
                  <th
                    scope="col"
                    className="text-white px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    Id
                  </th>
                  <th
                    scope="col"
                    className="text-white px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    Url de fotografia
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {fotos.map((foto) => (
                  <tr key={foto.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{foto.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {foto.imageUrl}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
