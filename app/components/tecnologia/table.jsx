"use client";

import axios from "axios";
import { useState, useEffect } from "react";

export default function TableTecnologia() {
  const [tecnologias, setTecnologias] = useState([]);

  async function loadTecnologia() {
    try {
      const res = await axios.get("/api/tecnologia");
      setTecnologias(res.data);
    } catch (error) {
      console.log("Error al cargar los datos: ", error);
    }
  }

  useEffect(() => {
    loadTecnologia();
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
                    nombre
                  </th>
                  <th
                    scope="col"
                    className="text-white px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    nivel
                  </th>
                  <th
                    scope="col"
                    className="text-white px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    Url de imagen
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tecnologias.map((tecnologia) => (
                  <tr key={tecnologia.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {tecnologia.nombre}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {tecnologia.nivel}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {tecnologia.imageUrl}
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
